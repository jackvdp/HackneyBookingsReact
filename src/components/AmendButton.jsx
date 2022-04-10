import { Link } from "react-router-dom";

function AmendButton() {
  return (
    <Link to="/amend"
    role="button"
    draggable="false"
    class="govuk-button lbh-button"
    data-module="govuk-button"
  >
    Amend a Booking
  </Link>
  )
}

export default AmendButton