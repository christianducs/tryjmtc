import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LandingPage/Login";
import Dashboard from "./DriverModule/Dashboard";
import ShopModule from "./ShopModule/ShopModule";
import AdminModule from "./AdminModule/AdminModule"; // keep it here

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />       {/* Landing page */}
        <Route path="/driver" element={<Dashboard />} />
        <Route path="/shop" element={<ShopModule />} />
        <Route path="/admin" element={<AdminModule />} /> {/* Only loads here */}
        <Route path="*" element={<Login />} />      {/* SPA fallback */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
