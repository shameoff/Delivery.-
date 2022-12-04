import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {authorize} from "../logic/auth";
import {Navigate} from "react-router-dom";

function AuthorizationForm() {
    const [token, setToken] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    useEffect(() => {
        localStorage.setItem("token", token)
    })
    if (token) {
        return (
            <Navigate to="/"/>
        )
    }
    return (
        <>
            <Form onSubmit={(event => {
                event.preventDefault()
                authorize({
                    "email": email,
                    "password": password
                })
                    .then((resp) => {
                        setToken(resp.data["token"])
                        console.log(token)
                    })
            })}>

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