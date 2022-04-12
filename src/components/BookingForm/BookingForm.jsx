import React, { useState, useEffect } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingFormLabel from './BookingFormLabel';
import BookingFormPicker from './BookingFormPicker';
import BookingFormInput from './BookingFormInput';
import axios from "axios";

export default function BookingForm() {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.fname.value)
  }

  useEffect(() => {
    axios.get("https://hackney-bookings-api.herokuapp.com/categories")
      .then(res => {
        setCategories(res.data)
        const id = res.data[0].categoryId
        axios.get("https://hackney-bookings-api.herokuapp.com/locations?id=" + id)
          .then(res => {
            setLocations(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div class="govuk-form-group lbh-form-group">
      <BookingFormLabel>Please select a category:</BookingFormLabel>
      <BookingFormPicker options={categories} />
      <BookingFormLabel>Please select a pitch:</BookingFormLabel>
      <BookingFormPicker options={locations} />
      <BookingFormLabel>Select a date:</BookingFormLabel>
      <div class="govuk-select lbh-select">
        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
      </div>
      <form onSubmit={handleSubmit} data-testid="booking-form">
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
}