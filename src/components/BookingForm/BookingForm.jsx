import React, { useState, useEffect } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import BookingFormLabel from './BookingFormLabel';
import BookingFormPicker from './BookingFormPicker';
import BookingFormInput from './BookingFormInput';
import BookingFormSlotPicker from './BookingFormSlotPicker';
import { Link, useNavigate } from "react-router-dom";

export default function BookingForm() {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [slots, setSlots] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    createBooking(event)
  }

  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
  }, []);

  return (
    <div class="govuk-form-group lbh-form-group">
      <form onSubmit={handleSubmit} data-testid="booking-form">
        <BookingFormLabel>Please select a category:</BookingFormLabel>
        <BookingFormPicker options={categories} onChange={handleCategoryChange} />
        <BookingFormLabel>Please select a location:</BookingFormLabel>
        <BookingFormPicker options={locations} onChange={handleLocationChange} />
        <BookingFormLabel>Select a time:</BookingFormLabel>
        <BookingFormSlotPicker slots={slots} />
        {/* First Name */}
        <BookingFormLabel>Enter your first name:</BookingFormLabel>
        <BookingFormInput name="fname" />
        {/* Last Name */}
        <BookingFormLabel>Enter your last name:</BookingFormLabel>
        <BookingFormInput name="lname" />
        {/* Email */}
        <BookingFormLabel>Enter your email:</BookingFormLabel>
        <BookingFormInput name="email" />
        {/* Special requirements */}
        <BookingFormLabel>Enter any special requirements:</BookingFormLabel>
        <span id="input-with-hint-text-hint" class="govuk-hint lbh-hint">
          For e.g., any assistance you may require
        </span>
        <BookingFormInput name="specreq" />
        <SubmitButton />
      </form>
    </div>
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

    navigate('/payment', { state: { body } })

    // axios.post("https://hackney-bookings-api.herokuapp.com/booking", body)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }


}

