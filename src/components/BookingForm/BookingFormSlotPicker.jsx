import BookingFormSlot from "./BookingFormSlot"

export default function BookingFormSlotPicker(props) {

  const slots = props.slots
  const onChange = props.onChange

  function handleChange(event) {
    const slotID = event.target.value
    const slot = slots.filter(slot => slot.slotId == slotID)[0]
    console.log("*****");
    console.log(slot);
    onChange(slot)
  }

  return (
    <>
      <div class="govuk-form-group lbh-form-group">
        <form onChange={handleChange}>
          <fieldset class="govuk-fieldset" aria-describedby="example-hint">
            <div class="govuk-radios lbh-radios">
              {slots.map(slot => (
                <BookingFormSlot slot={slot} />
              ))}
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}

