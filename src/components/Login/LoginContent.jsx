import FormInput from "../Resuables/FormInput";
import FormLabel from "../Resuables/FormLabel";
import LHBButton from "../Resuables/LHBButton";
import FormInputPassword from "../Resuables/FormPasswordInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "./LoginError";

export default function LoginContent() {

    const navigate = useNavigate();

    var [showError, setShowError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        login(event)
    }

    return(
        <div class="govuk-form-group lbh-form-group">
            <form onSubmit={handleSubmit} data-testid="booking-form">
                <FormLabel>Email Address:</ FormLabel>
                <FormInput name="email"></ FormInput>
                <FormLabel>Password:</ FormLabel>
                <FormInputPassword name="password"></ FormInputPassword>
                <LHBButton>Log in</LHBButton>
            </form>
            { showError && <ErrorMessage></ErrorMessage> }
        </div>
    )

    function login(event) {
        const email = event.target.email.value
        const password = event.target.password.value

        if (email == "" || password == "") {
            setShowError(true)
        } else {
            navigate('/admin/manage-categories', { state: { } })
        }
        
    }
}