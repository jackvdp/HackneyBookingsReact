export default function FormInputPassword(props) {

    const name = props.name
  
    return (
      <input
        class="govuk-input lbh-input"
        id="input-example-password"
        name={name}
        type="password"
      />
    )
  }