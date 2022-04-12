import React, { useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [startDate, setStartDate] = useState(new Date());

  const [submit, setSubmit] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit("Form has been successfully submitted.")
    console.log(event.target.fname.value)
    console.log(event.target.lname.value)
    console.log(event.target.email.value)
  }

  return (
    <div class="govuk-form-group lbh-form-group">
      <label class="govuk-label lbh-label" for="select-1">
        Please select a category:
      </label>
      <select class="govuk-select lbh-select" id="select-1" name="select-1">
        <option value="1">Hackney Marshes</option>
        <option value="2">Mabley Green - 3G Pitch</option>
        <option value="3">Haggerston Park</option>
      </select>
      <label class="govuk-label lbh-label" for="select-1">
        Please select a pitch:
      </label>
      <select class="govuk-select lbh-select" id="select-1" name="select-1">
        <option value="1">Hackney Marshes</option>
        <option value="2">Mabley Green - 3G Pitch</option>
        <option value="3">Haggerston Park</option>
      </select>
      <label class="govuk-label lbh-label" for="select-1">
        Select a date
      </label>
      <div class="govuk-select lbh-select">
        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
      </div>
      <form onSubmit={handleSubmit} data-testid="booking-form">
        {/* First Name */}
        <label class="govuk-label lbh-label" for="input-example">
          Enter your first name:
        </label>
        <input
          class="govuk-input lbh-input"
          id="input-example"
          name="fname"
          type="text"
        />
        {/* Last Name */}
        <label class="govuk-label lbh-label" for="input-example">
          Enter your last name:
        </label>
        <input
          class="govuk-input lbh-input"
          id="input-example"
          name="lname"
          type="text"
        />
        {/* Email */}
        <label class="govuk-label lbh-label" for="input-example">
          Enter your email:
        </label>
        <input
          class="govuk-input lbh-input"
          id="input-example"
          name="email"
          type="text"
        />
        {/* Special requirements */}
        <label class="govuk-label lbh-label" for="input-example">
          Enter any special requirements:
        </label>
        <span id="input-with-hint-text-hint" class="govuk-hint lbh-hint">
          For e.g., any assistance you may require
        </span>
        <input
          class="govuk-input lbh-input"
          id="input-example"
          name="special-req"
          type="text"
        />
        <SubmitButton />
        <h4>{submit}</h4>
      </form>
    </div>
  )
}