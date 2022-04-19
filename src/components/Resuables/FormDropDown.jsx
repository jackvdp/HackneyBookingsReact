export default function FormDropDown(props) {

  const options = props.options
  const onChange = props.onChange

  function handleChange(event) {
    const value = event.target.value
    const category = options.filter(cat => cat.name == value)[0]
    onChange(category)
  }

  return(
    <select class="govuk-select lbh-select" id="select-1" name="slotPicker" onChange={handleChange}>
      {options.map(o => (
        <option>{o.name}</option>
      ))}
    </select>
  )
}