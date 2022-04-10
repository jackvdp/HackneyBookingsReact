import { Link } from "react-router-dom";

function BookingButton() {
  return (
    <Link to="/booking"
      role="button"
      draggable="false"
      class="govuk-button lbh-button"
      data-module="govuk-button"
      style={{marginRight: '3rem'}}
  >
  Create a Booking
  </Link >
  )
}

export default BookingButton