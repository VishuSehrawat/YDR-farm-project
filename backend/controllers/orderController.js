const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");
const Stripe = require("stripe");

const stripeSession = new Stripe(process.env.STRIPE_SECRET_KEY);
// console.log(stripeSession)

const placeOrder = async (req, res) => {
  const frontendUrl = "http://localhost:5173";
  const { address, items, amount } = req.body;
  const userId = req.body.userId;

  try {
    const newOrder = new orderModel({
      userId: userId,
      address: address,
      items: items,
      amount: amount,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    const updatedUser = await userModel.findById({ _id: userId });

    const line_items = items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.newPrice * 100,
      },
      quantity: item.quantity,
    }));

    console.log(line_items);

    //creating stripe session

    const session = await stripeSession.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontendUrl}/verifyOrder?success=true&sessionId=${newOrder._id}`,
      cancel_url: `${frontendUrl}/verifyOrder?success=false&sessionId=${newOrder._id}`,
    });
    console.log(session.url);

    res.json({ success: true, sessionUrl: session.url });
  } catch (error) {
    console.log(`error-> ${error}`);
    res.json({ success: false, message: `error-> ${error}` });
  }
};

const verifyOrder = async (req, res) => {
  const { success, sessionId } = req.body;
  console.log(success, sessionId);

  try {
    if (success === "true") {
      await userModel.findByIdAndUpdate(sessionId, { payment: true });

      res.json({ success: true, message: "paid" });
    } else {
      await orderModel.findByIdAndDelete(sessionId);

      res.json({ success: false, message: "notPaid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `Error-> ${error}` });
  }
};

const findUserOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    console.log("orders found", orders);
    res.json({ success: true, userOrders: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `error-> ${error}` });
  }
};

module.exports = {
  placeOrder,
  verifyOrder,
  findUserOrders,
};
