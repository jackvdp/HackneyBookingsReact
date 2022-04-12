export default function BookingFormInput(props) {

  const name = props.name

  return (
    <input
      class="govuk-input lbh-input"
      id="input-example"
      name={name}
      type="text"
    />
  )
}
