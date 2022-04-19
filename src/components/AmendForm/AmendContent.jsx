import AmendForm from "./AmendForm";
import DialogCancel from "../DialogCancel/DialogCancel";

export default function AmendContent() {
  return (
    <>
        <h2>Amend your Booking</h2>
        <AmendForm />
        <button class="govuk-button lbh-button" data-module="govuk-button">
          Change your Booking
        </button>
        {"      "}
        <DialogCancel />
    </>
  );
}