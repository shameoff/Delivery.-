import React, {useEffect, useState} from "react";
import {Button, Container, Form, FormControl, FormLabel, FormSelect} from "react-bootstrap";
import Loader from "../../components/Loader";
import {getData, getPrivateData} from "../../logic/getData";


function ProfileCard(props) {
    const [profileInfo, setProfileInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const [formEnabled, setFormEnabled] = useState(false)
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
            <Container className="d-flex">
                <Container className="d-block w-25 row">
                    <div className="display-6 col">ФИО</div>

                    <div className="display-6 col">Email</div>

                    <div className="display-6 col">День рождения</div>

                    <div className="display-6 col">Пол</div>

                    <div className="display-6 col">Адрес</div>

                    <div className="display-6 col">Телефон</div>
                </Container>
                <Container className="row">
                    <div className="col mt-3"><input disabled={!formEnabled} className="form-control" type="text" placeholder={`${profileInfo.fullName}`}/></div>
                    <div className="col mt-3">{`${(profileInfo.birthDate)}`}</div>
                    <div className="col mt-3">
                        <select disabled={!formEnabled} className="form-select" placeholder={`${profileInfo.gender}`}>
                            <option>Мужчина</option>
                            <option>Женщина</option>
                        </select>
                    </div>
                    <div className="col mt-3">{`${profileInfo.email}`}</div>
                    <div className="col mt-3"><input disabled={!formEnabled} className="form-control" type="text" placeholder={`${profileInfo.address}`}/></div>
                    <div className="col mt-3"><input disabled={!formEnabled} className="form-control" type="text" placeholder={`${profileInfo.phoneNumber}`}/></div>

                </Container>

            </Container>
        </>
    )
}

export default ProfileCard