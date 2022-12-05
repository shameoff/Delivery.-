import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {authorize} from "../../logic/auth";
import {Link, useNavigate} from "react-router-dom";
import {Modal} from "react-bootstrap";
import ModalError from "../../components/ModalError";
import {useInput} from "../../logic/inputs";

function AuthorizationForm() {
    const [token, setToken] = useState("")
    const email = useInput("", {isEmpty: true, isEmail: true})
    const password = useInput("", {isEmpty: true, minLength: 5})
    const navigate = useNavigate()
    const [showModal, setShowModel] = useState(false)
    const [error, setError] = useState(false)

    function onFormSubmit() {
        authorize(email.value, password.value)
            .then((resp) => {
                localStorage.setItem("token", resp.data.token)
                navigate("/")
            })
            .catch(error => {
                // console.log(error["title"])
                setError(error)
                setShowModel(true)
            })
    }

    return (
        <>
            <ModalError error={error} show={showModal} onHide={() => setShowModel(false)}/>
            <Form onSubmit={(event => {
                event.preventDefault()
                onFormSubmit()
            })}>

                <h1>Вход</h1>
                <Form.Group className="mb-3" controlId="formEmailLogin">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Введите ваш Email"
                                  onChange={event => email.onChange(event)} onBlur={e => email.onBlur(e)}/>
                    {!email.inputValid && <Form.Text className="text-muted">{email.errorMessage}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPasswordLogin">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите ваш пароль"
                                  onChange={event => password.onChange(event)} onBlur={e => password.onBlur(e)}/>
                    {!password.inputValid && <Form.Text className="text-muted">{password.errorMessage}</Form.Text>}
                </Form.Group>

                <Button variant="primary" type="submit" className="me-3"
                        disabled={!password.inputValid || !email.inputValid}>Войти</Button>
                <Link to="/registration"><Button variant="secondary" type="submit">Зарегистрироваться</Button></Link>
            </Form>
        </>
    )
}


export default AuthorizationForm