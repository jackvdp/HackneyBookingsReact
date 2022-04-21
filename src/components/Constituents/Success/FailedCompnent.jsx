import { Link } from "react-router-dom";
import LHBButton from "../../Resuables/LHBButton";

export default function FailedContent() {

    return(
        <>
        <span class="govuk-error-message lbh-error-message">
        <span class="govuk-visually-hidden">Error:</span> Payment Details were incorrect. Please try again.</span>
        <Link to="/booking"><LHBButton >Make Booking Again</ LHBButton></Link>
        </>
    )

}