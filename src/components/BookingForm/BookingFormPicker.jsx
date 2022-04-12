export default function BookingFormPicker(props) {

  const options = props.options

  return(
    <select class="govuk-select lbh-select" id="select-1" name="select-1">
      {options.map(o => (
        <option>{o.name}</option>
      ))}
    </select>
  )
}
