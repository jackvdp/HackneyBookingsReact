import React, { useState } from "react";
import PaymentForm from "../components/PaymentForm/PaymentForm";

export default function Booking() {
  return (
    <main className="lbh-main-wrapper" id="main-content" role="main">
      <div className="lbh-container">
        <h2>Pay for your Booking</h2>
        <PaymentForm />
      </div>
    </main>
  );
}