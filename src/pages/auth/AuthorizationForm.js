import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {authorize} from "../../logic/auth";
import {useNavigate} from "react-router-dom";

function AuthorizationForm() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    function onFormSubmit(e) {
        e.preventDefault()
        authorize({
            "email": email,
            "password": password
        })
            .then((resp) => {
                localStorage.setItem("token", resp.data.token)
                navigate("/")
            })
    }
    return (
        <>
            <Form onSubmit={event => onFormSubmit(event)}>

                <h1>Вход</h1>
                <Form.Group className="mb-3" controlId="formEmailLogin">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Введите ваш Email" onChange={event => {
                        setEmail(event.target.value)
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPasswordLogin">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите ваш пароль" onChange={event => {
                        setPassword(event.target.value)
                    }}/>
                </Form.Group>

                <Button variant="primary" type="submit">Войти</Button>
            </Form>
        </>
    )
}


export default AuthorizationForm