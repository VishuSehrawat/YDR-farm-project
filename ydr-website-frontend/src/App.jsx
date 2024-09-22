import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import LoginSignup from "./pages/loginSignup/LoginSignup";
import { useContext, useState } from "react";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import Products from "./components/products/Products";
import { StoreContextApi } from "./context/StoreContext";
import Orders from "./pages/orders/Orders";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const { token } = useContext(StoreContextApi);

  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />

        {showLogin || token !== "" ? (
          <Route
            path="/loginSignup"
            element={<LoginSignup setShowLogin={setShowLogin} />}
          />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/profile" element={<Profile />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
