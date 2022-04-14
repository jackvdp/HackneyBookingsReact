import AmendForm from "../components/AmendForm/AmendForm";
import DialogCancel from "../components/DialogCancel/DialogCancel";

export default function Amend() {
  return (
    <main className="lbh-main-wrapper" id="main-content" role="main">
      <div className="lbh-container">
        <h2>Amend your Booking</h2>
        <AmendForm />
        <button class="govuk-button lbh-button" data-module="govuk-button">
          Change your Booking
        </button>
        {"      "}
        <DialogCancel />
      </div>
    </main>
  );
}