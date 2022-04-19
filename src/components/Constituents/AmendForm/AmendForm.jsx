export default function AmendForm() {
  return (
    <div class="govuk-form-group lbh-form-group">
      {/* Reference number */}
      <label class="govuk-label lbh-label" for="input-example">
        Enter your reference number:
      </label>
      <span id="input-with-hint-text-hint" class="govuk-hint lbh-hint">
        This is the reference number you received when you created a booking.
      </span>
      <input
        class="govuk-input lbh-input"
        id="input-example"
        name="test-name"
        type="text"
      />     
    </div>
  )
}
