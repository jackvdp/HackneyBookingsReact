import React, { useState, useEffect } from 'react';
import LHBButton from '../Resuables/LHBButton';
import FormInput from '../Resuables/FormInput';
import FormLabel from '../Resuables/FormLabel';
import PaymentRadio from './PaymentRadio';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
        <form onSubmit={handleSubmit} data-testid="booking-form">
          <FormLabel>Please select your card type:</FormLabel>
          <PaymentRadio />
          <FormLabel>Enter your card number:</FormLabel>
          <FormInput name="cardnumber" />
          <FormLabel>Enter your CVC:</FormLabel>
          <FormInput name="cvc" />
          <FormLabel>Enter the expiry date:</FormLabel>
          <FormInput name="expiry" />
          <LHBButton>Submit</LHBButton>
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
      "bookingReference": bookingInfo.bookingReference,
      "slotId": bookingInfo.slotId,
      "payment": {
        "CardNumber": cardNumber,
        "CVC": cvv,
        "ExpiryDate": expiry
      }
    }

    console.log("***** Body");
    console.log(body);

    navigate('/success', { state: { body } })
        
  }

}

