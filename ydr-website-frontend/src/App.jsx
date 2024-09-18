import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import LoginSignup from "./pages/loginSignup/LoginSignup";
import { useState } from "react";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import Products from "./components/products/Products";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {showLogin ? (
          <Route
            path="/loginSignup"
            element={<LoginSignup setShowLogin={setShowLogin} />}
          />
        ) : (
          <></>
        )}
        <Route path="/profile" element={<Profile />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
