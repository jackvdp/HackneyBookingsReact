import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Constituents/Home";
import Amend from "./Constituents/Amend";
import Booking from "./Constituents/Booking";
import Payment from "./Constituents/Payment";
import Success from "./Constituents/Success";
import AdminLogin from "./Staff/AdminLogin";
import Failed from "./Constituents/Failed";

export default function Routing() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="booking" element={<Booking />} />
                <Route path="amend" element={<Amend />} />
                <Route path="payment" element={<Payment />} />
                <Route path="success" element={<Success />} />
                <Route path="fail" element={<Failed />} />
                <Route path="admin/login" element={<AdminLogin />} />
                <Route path="admin/manage-categories" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )

}