import React from "react";
import {Button, Form, FormControl, FormLabel, FormText} from "react-bootstrap";

function RegistrationForm() {
    return (
        <>
            <FormLabel><h1>Регистрация нового пользователя</h1></FormLabel>
            <Form>
                <Form.Group className="mb-3" controlId="formNameRegister">
                    <FormLabel>ФИО</FormLabel>
                    <FormControl type="fullName" placeholder="Введите своё полное имя"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSexRegister">
                    <FormLabel>Пол</FormLabel>
                    <FormControl type="sex" placeholder="Мужчина"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoneRegister">
                    <FormLabel>Телефон</FormLabel>
                    <FormControl type="phoneNumber" placeholder="+7 (xxx) xxx-xx-xx"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBirthDateRegister">
                    <FormLabel>Дата рождения</FormLabel>
                    <FormControl type="birthDate" placeholder="дд.мм.гггг"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddressRegister">
                    <FormLabel>Адрес</FormLabel>
                    <FormControl type="address" placeholder="г. Томск, ул. Ленина, д. 1"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmailRegister">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Введите адрес электронной почты"/>
                    <Form.Text className="text-muted">
                        Email вы будете использовать как логин при входе в систему
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPasswordRegister">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Придумайте и введите пароль"/>
                </Form.Group>

                <Button variant="primary" type="submit">Зарегистрироваться!</Button>
            </Form>
        </>
    )
}


export default RegistrationForm