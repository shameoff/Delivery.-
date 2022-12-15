import React from "react";
import {Button, Container, Form, FormControl, FormLabel, FormSelect} from "react-bootstrap";
import {useInput} from "../../logic/inputs";
import {register} from "../../logic/auth";

function RegistrationForm() {

    const fullName = useInput("",)
    const gender = useInput("")
    const phoneNumber = useInput("", {isDigit: true, isNotEmpty: true})
    const birthDate = useInput("")
    const address = useInput("")
    const email = useInput("", {isNotEmpty: true, minLength: 3, isEmail: true})
    const password = useInput("", {isNotEmpty: true, minLength: 5})

    return (
        <Container className="p-2">
            <h1>Регистрация нового пользователя</h1>
            <Form onSubmit={(event) => {
                event.preventDefault()
                register({
                    "fullName": fullName.value,
                    "gender": gender.value === "Мужчина" ? "Male" : "Female",
                    "phoneNumber": phoneNumber.value,
                    "birthDate": birthDate.value,
                    "address": address.value,
                    "email": email.value,
                    "password": password.value
                })
            }}>
                <Form.Group className="mb-3" controlId="formNameRegister">
                    <FormLabel>ФИО</FormLabel>
                    <FormControl type="fullName" onChange={e => fullName.onChange(e)} onBlur={e => fullName.onBlur(e)}
                                 placeholder="Введите своё полное имя"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSexRegister">
                    <FormLabel>Пол</FormLabel>
                    <FormSelect type="gender" onChange={e => gender.onChange(e)} onBlur={e => gender.onBlur(e)}>
                        <option>Мужчина</option>
                        <option>Женщина</option>
                    </FormSelect>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoneRegister">
                    <FormLabel>Телефон</FormLabel>
                    <FormControl className="phoneNumber" type="tel"
                                 onChange={e => {phoneNumber.onChange(e)}}
                                 onBlur={e => phoneNumber.onBlur(e)} placeholder="+7 (xxx) xxx-xx-xx"/>
                    <Form.Text className="text-muted">
                        {(phoneNumber.isDirty && !phoneNumber.inputValid) && "Некорректный номер телефона!"}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBirthDateRegister">
                    <FormLabel>Дата рождения</FormLabel>
                    <FormControl type="date" onChange={e => birthDate.onChange(e)}
                                 onBlur={e => birthDate.onBlur(e)} placeholder="дд.мм.гггг"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddressRegister">
                    <FormLabel>Адрес</FormLabel>
                    <FormControl type="address" onChange={e => address.onChange(e)} onBlur={e => address.onBlur(e)}
                                 placeholder="г. Томск, ул. Ленина, д. 1"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmailRegister">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)}
                                  placeholder="Введите адрес электронной почты"/>
                    <Form.Text className="text-muted">
                        {!(email.inputValid) ? "Поле не должно быть пустым!" : "Email вы будете использовать как логин при входе в систему"}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPasswordRegister">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)}
                                  placeholder="Придумайте и введите пароль"/>
                    <Form.Text className="text-muted">
                        {password.isDirty && !password.inputValid ? "Некорректный пароль" : ""}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit"
                        disabled={!email.inputValid || !password.inputValid || !phoneNumber.inputValid}>Зарегистрироваться!</Button>
            </Form>
        </Container>
    )
}


export default RegistrationForm