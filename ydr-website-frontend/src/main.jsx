import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StoreContext from "./components/context/StoreContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <StoreContext>
    <App />
  </StoreContext>
  </BrowserRouter>
);