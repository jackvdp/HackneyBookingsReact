import React, { useState, useEffect } from 'react';
import LHBButton from '../../Resuables/LHBButton';
import FormInput from '../../Resuables/FormInput';
import FormLabel from '../../Resuables/FormLabel';
import PaymentRadio from './PaymentRadio';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PaymentAmountLabel from './PaymentAmount';
import axios from "axios";

export default function PaymentForm(props) {

  const location = useLocation()
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createBooking(event)
  }

  useEffect(() => {
    
  }, []);

  return (
    <>
      <div class="govuk-form-group lbh-form-group">
        <PaymentAmountLabel />
        <form onSubmit={handleSubmit} data-testid="booking-form">
          <FormLabel>Please select your card type:</FormLabel>
          <PaymentRadio />
          <FormLabel>Enter your card number:</FormLabel>
          <FormInput name="cardnumber" />
          <FormLabel>Enter your CVC:</FormLabel>
          <FormInput name="cvc" />
          <FormLabel>Enter the expiry date:</FormLabel>
          <FormInput name="expiry" />
          <LHBButton>Pay</LHBButton>
        </form>
      </div>
    </>
  )

  function createBooking(event) {
    const cardNumber = event.target.cardnumber.value
    const cvv = event.target.cvc.value
    const expiry = event.target.expiry.value

    const bookingInfo = location.state.body

    const body = {
      "firstName": bookingInfo.firstName,
      "lastName": bookingInfo.lastName,
      "email": bookingInfo.email,
      "specialReq": bookingInfo.specialReq,
      "slotId": bookingInfo.slotId,
      "cardholderName": bookingInfo.firstName + " " + bookingInfo.lastName,
      "cardType": "Visa",
      "cardNumber": cardNumber,
      "billingAddress": "Demo address",
      "cvc": cvv,
      "expiryDate": expiry
    }

    if (!expiry.includes("/")) {
      navigate('/fail', { state: { } })
    } else {
      axios.post("https://hackney-bookings-api.herokuapp.com/bookings", body)
      .then(res => {
        console.log(res.data);
        console.log(res.data.bookingReference)
        const booking = res.data
        navigate('/success', { state: { booking } })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

}

