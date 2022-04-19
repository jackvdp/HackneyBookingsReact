export default function LHBButton(props) {
    return(
        <button class="govuk-button lbh-button" data-module="govuk-button" style = {{ marginRight: '3rem' }}>
            {props.children}
        </button>
    )
}