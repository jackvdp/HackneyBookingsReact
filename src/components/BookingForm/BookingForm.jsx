import React, { useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function BookingForm() {
  const [submit, setSubmit] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit("Form has been successfully submitted.")
    console.log(event.target[0].value)
    console.log(event.target.fname.value)
    console.log(event.target.lname.value)
    console.log(event.target.email.value)
  }

  return (
    <div class="govuk-form-group lbh-form-group">
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