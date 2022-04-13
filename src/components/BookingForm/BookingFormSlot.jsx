export default function BookingFormSlot(props) {
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
          {props.slot.startTime}
        </label>
      </div>
  )
}