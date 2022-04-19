export default function ErrorMessage(props) {
    return(
        <div
  class="govuk-error-summary optional-extra-class lbh-error-summary"
  aria-labelledby="error-summary-title"
  role="alert"
  tabindex="-1"
  data-module="govuk-error-summary"
>
  <h2 class="govuk-error-summary__title" id="error-summary-title">
    Incorrect Password
  </h2>
  <div class="govuk-error-summary__body">
    <ul class="govuk-list govuk-error-summary__list">
      <li>
        <a href="#example-error-1">
            Please enter your login details again.
        </a>
      </li>
    </ul>
  </div>
</div>
    )
}