import React, {useEffect, useState} from "react";
import {Button, Container, Form, FormControl, FormLabel, FormSelect} from "react-bootstrap";
import Loader from "../../components/Loader";
import {getData, getPrivateData} from "../../logic/getData";


function ProfileCard(props) {
    const [profileInfo, setProfileInfo] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPrivateData("/account/profile")
            .then((resp) => {
                setProfileInfo(resp.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading && <Loader/>}
            <Container style={{margin: "5px"}}>
                <Form disabled>

                    <Form.Group className="mb-3" controlId="formProfileId">
                        <FormLabel>ID</FormLabel>
                        <FormControl type="profileId" placeholder={`${profileInfo.id}`}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <FormLabel>ФИО</FormLabel>
                        <FormControl type="fullName" placeholder={`${profileInfo.fullName}`}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGender">
                        <FormLabel>Пол</FormLabel>
                        <FormSelect type="Gender" placeholder={`${profileInfo.gender}`}>
                            <option>Мужчина</option>
                            <option>Женщина</option>
                        </FormSelect>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhone">
                        <FormLabel>Телефон</FormLabel>
                        <FormControl type="phoneNumber" placeholder={`${profileInfo.phoneNumber}`}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBirthDate">
                        <FormLabel>Дата рождения</FormLabel>
                        <FormControl type="birthDate" placeholder={`${profileInfo.birthDate}`}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAddress">
                        <FormLabel>Адрес</FormLabel>
                        <FormControl type="address" placeholder={`${profileInfo.address}`}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Изменить</Button>
                </Form>
            </Container>
        </>
    )
}

export default ProfileCard