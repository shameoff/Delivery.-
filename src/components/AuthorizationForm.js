import React, {useState} from "react";
import {Button, Form, FormControl, FormLabel, FormText} from "react-bootstrap";
import {authorize} from "../logic/auth";

function AuthorizationForm() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <>
            <Form onSubmit={(event => {
                event.preventDefault()
                authorize({
                    "email": email,
                    "password": password
                })
            })}>
                <FormLabel><h1>Вход</h1></FormLabel>
                <Form.Group className="mb-3" controlId="formEmailLogin">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Введите ваш Email" onChange={event => {
                        setEmail(event.target.value)
                    }
                    }/>
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