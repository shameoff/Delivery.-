import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import RegistrationForm from "./auth/RegistrationForm";

function RegistrationPage(props) {

    useEffect(() => {
        document.title = "Регистрация"
    })

    return (
        <Container className="pt-5-3, mt-3 m-auto rounded-3 bg-light d-block align-content-center">
            <RegistrationForm/>
        </Container>
    )
}

export default RegistrationPage;