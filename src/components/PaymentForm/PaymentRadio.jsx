function PaymentRadio() {
  return (
    <div class="govuk-form-group lbh-form-group">
      <fieldset class="govuk-fieldset" aria-describedby="example-hint">
        <div class="govuk-radios govuk-radios--inline lbh-radios">
          <div class="govuk-radios__item">
            <input
              class="govuk-radios__input"
              id="example"
              name="example"
              type="radio"
              value="mastercard"
            />
            <label class="govuk-label govuk-radios__label" for="example">
              Mastercard
            </label>
          </div>
          <div class="govuk-radios__item">
            <input
              class="govuk-radios__input"
              id="example-2"
              name="example"
              type="radio"
              value="visa"
            />
            <label class="govuk-label govuk-radios__label" for="example-2">
              Visa
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default PaymentRadio