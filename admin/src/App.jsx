import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Orders from "./pages/orders/Orders";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const backendUrl = "http://localhost:4000";

  return (
    <>
      <Navbar />
      
      <div className="appContent">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add backendUrl={backendUrl} />} />
          <Route path="/list" element={<List backendUrl={backendUrl} />} />
          <Route path="/orders" element={<Orders backendUrl={backendUrl} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
