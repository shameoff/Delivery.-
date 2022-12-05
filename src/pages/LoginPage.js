import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import AuthorizationForm from "./auth/AuthorizationForm";

function Registration(props) {

    useEffect(() => {
        document.title = "Войти"
    })

    return (
        <Container className="pt-5-3, mt-3 m-auto rounded-3 bg-light d-block align-content-center">
            <AuthorizationForm/>
        </Container>
    )
}

export default Registration;