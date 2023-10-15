import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SmartCardDashboard from "./it21042560/SmartCardDashboard";
import AdminLogin from "./IT21049590/AdminLogin";
import AdminProfile from "./IT21049590/AdminProfile";
import "bootstrap/dist/css/bootstrap.css";
import SmartCardRequest from "./it21042560/SmartCardRequest";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={true} />
        <Routes>
          {/* Sajindu */}
          <Route path="/smartcard" element={<SmartCardDashboard />} />
          <Route path="/smartcard/request" element={<SmartCardRequest />} />

          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminProfile" element={<AdminProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
