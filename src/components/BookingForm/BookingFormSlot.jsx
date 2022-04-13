export default function BookingFormSlot(props) {

  function GetStartDate() {
    const date = new Date(props.slot.startTime)
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatted = date.toLocaleDateString(undefined, options)
    const timeFormatted = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    return dateFormatted + ", " + timeFormatted
  }

  function GetEndDate() {
    const date = new Date(props.slot.endTime)
    const timeFormatted = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    return timeFormatted
  }

  function GetDate() {
    return GetStartDate() + " – " + GetEndDate()
  }

  return (
    <div class="govuk-radios__item">
      <input
        class="govuk-radios__input"
        id="example"
        name="example"
        type="radio"
        value={props.slot.slotId}
      />
      <label class="govuk-label govuk-radios__label" for="example">
        {GetDate()}
      </label>
    </div>
  )
}