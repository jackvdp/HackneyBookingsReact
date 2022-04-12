import React, { useState } from "react";
import BookingForm from "../components/BookingForm/BookingForm";

export default function Booking() {
  return (
    <main className="lbh-main-wrapper" id="main-content" role="main">
      <div className="lbh-container">
        <h2>Create a Booking</h2>
        <BookingForm />
      </div>
    </main>
  );
}