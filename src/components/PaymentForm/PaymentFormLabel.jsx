
export default function PaymentFormLabel(props) {

    return(
        <div>
            <label class="govuk-label lbh-label" for="select-1">
            {props.children}
            </label>
        </div>
    )
    
}