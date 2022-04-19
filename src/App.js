import React from "react"
import "./styles/index.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Amend from "./routes/Amend";
import Booking from "./routes/Booking";
import Payment from "./routes/Payment";
import Success from "./routes/Success";
import Main from "./components/Main/Main";
import Footer from "./components/Main/Footer";
import AdminLogin from "./routes/AdminLogin";

function App() {
  return (
    <>
    <Main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="amend" element={<Amend />} />
        <Route path="payment" element={<Payment />} />
        <Route path="success" element={<Success />} />
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin/manage-categories" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </Main>
    <Footer />
    </>
  )

}

export default App
