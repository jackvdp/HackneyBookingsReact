import React, { useState, useEffect } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import PaymentFormLabel from './PaymentFormLabel';
import PaymentFormInput from './PaymentFormInput';
import PaymentRadio from './PaymentRadio';
import { Link } from "react-router-dom";
import axios from 'axios';
import {
  useLocation
} from "react-router-dom";

export default function PaymentForm(props) {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [slots, setSlots] = useState([])

  const location = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault();
    // createBooking(event)
  }

  useEffect(() => {
    console.log("***** State");
    console.log(props);
    console.log(location.state);
    console.log(location.pathname);
  }, []);

  return (
    <>
      <div class="govuk-form-group lbh-form-group">
        <form onSubmit={handleSubmit} data-testid="booking-form">
          <PaymentFormLabel>Please select your card type:</PaymentFormLabel>
          <PaymentRadio />
          <PaymentFormLabel>Enter your card number:</PaymentFormLabel>
          <PaymentFormInput name="cardnumber" />
          <PaymentFormLabel>Enter your CVV:</PaymentFormLabel>
          <PaymentFormInput name="cvv" />
          <PaymentFormLabel>Enter the expiry date:</PaymentFormLabel>
          <PaymentFormInput name="expiry" />
          <Link to="/success"><SubmitButton /></Link>
        </form>
      </div>
    </>
  )

}

