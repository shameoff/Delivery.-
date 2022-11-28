import React from "react";
import {Button, Form, FormControl, FormLabel, FormText} from "react-bootstrap";

function AuthorizationForm() {
    return (
        <>
            <Form>
                <FormLabel><h1>Вход</h1></FormLabel>
                <Form.Group className="mb-3" controlId="formEmailLogin">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Введите ваш Email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPasswordLogin">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите ваш пароль"/>
                </Form.Group>

                <Button variant="primary" type="submit">Зарегистрироваться!</Button>
            </Form>
        </>
    )
}


export default AuthorizationForm