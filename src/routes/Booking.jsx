import React, { useState } from "react";
import BookingForm from "../components/BookingForm/BookingForm";

export default function Booking() {
  return (
    <main className="lbh-main-wrapper" id="main-content" role="main">
      <div className="lbh-container">
        <h2>Create a Booking</h2>
        <h5>The spaces available:
          <br></br>
          <ul>
            <li><a href="https://www.hackney.gov.uk/hackney-marshes">Hackney Marshes</a></li>
            <li><a href="https://www.hackney.gov.uk/mabley-green">Mabley Green</a>&nbsp;– 3G pitch</li>
            <li><a href="https://www.hackney.gov.uk/haggerston-park">Haggerston Park</a></li>
          </ul>
        </h5>
        <BookingForm />
      </div>
    </main>
  );
}