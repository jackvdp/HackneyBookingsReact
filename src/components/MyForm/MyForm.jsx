function MyForm() {
  return (
    <div class="govuk-form-group lbh-form-group">
      {/* First Name */}
      <label class="govuk-label lbh-label" for="input-example">
        Enter your first name:
      </label>
      <input
        class="govuk-input lbh-input"
        id="input-example"
        name="test-name"
        type="text"
      />
      {/* Last Name */}
      <label class="govuk-label lbh-label" for="input-example">
        Enter your last name:
      </label>
      <input
        class="govuk-input lbh-input"
        id="input-example"
        name="test-name"
        type="text"
      />
      {/* Email */}
      <label class="govuk-label lbh-label" for="input-example">
        Enter your email:
      </label>
      <input
        class="govuk-input lbh-input"
        id="input-example"
        name="test-name"
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
        name="test-name"
        type="text"
      />
    </div>
  )
}

export default MyForm
