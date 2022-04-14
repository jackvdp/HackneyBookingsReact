import React, { useState, useEffect } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import PaymentFormLabel from './PaymentFormLabel';
import PaymentFormInput from './PaymentFormInput';
import PaymentRadio from './PaymentRadio';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function PaymentForm() {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [slots, setSlots] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    createBooking(event)
  }

  useEffect(() => {
    getCategories()
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

  function getCategories() {
    axios.get("https://hackney-bookings-api.herokuapp.com/categories")
      .then(res => {
        setCategories(res.data)
        getLocations(res.data[0].categoryId)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleCategoryChange(category) {
    const id = category.categoryId
    getLocations(id)
  }

  function getLocations(id) {
    axios.get("https://hackney-bookings-api.herokuapp.com/locations?id=" + id)
      .then(res => {
        setLocations(res.data)
        getSlots(res.data[0].locationId)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleLocationChange(location) {
    const id = location.locationId
    getSlots(id)
  }

  function getSlots(locationsId) {
    axios.get("https://hackney-bookings-api.herokuapp.com/slots?id=" + locationsId)
      .then(res => {
        setSlots(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function createBooking(event) {
    const slotID = event.target.slot.value
    const fname = event.target.fname.value
    const lname = event.target.lname.value
    const email = event.target.email.value
    const specreq = event.target.specreq.value

    const body = {
      "firstName": fname,
      "lastName": lname,
      "email": email,
      "specialReq": specreq,
      "bookingReference": "123456",
      "slotId": slotID
    }

    console.log("Body of POST");
    console.log(body);

    axios.post("https://hackney-bookings-api.herokuapp.com/booking", body)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
  }
}

