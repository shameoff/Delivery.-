import React, {useEffect, useState} from "react";
import {Button, Container, Form, FormControl, FormLabel, FormSelect} from "react-bootstrap";
import Loader from "../../components/Loader";
import {getData, getPrivateData} from "../../logic/getData";
import {useNavigate} from "react-router-dom";
import {useInput} from "../../logic/inputs";
import {editProfileInfo} from "../../logic/auth";


function ProfileCard(props) {
    const [profileInfo, setProfileInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const [formEnabled, setFormEnabled] = useState(false)
    const navigate = useNavigate()
    const fullName = useInput(profileInfo.fullName, {isNotEmpty: true})
    const birthDate = useInput(profileInfo.birthDate, {isNotEmpty: true})
    const gender = useInput(profileInfo.gender)
    const address = useInput(profileInfo.address, {isNotEmpty: true})
    const phone = useInput(profileInfo.phoneNumber, {isNotEmpty: true, isDigit: true})

    useEffect(() => {
        getPrivateData("/account/profile")
            .then((resp) => {
                setProfileInfo(resp.data)
                setLoading(false)
            })
            .catch((error) => {
                switch (error.status) {
                    case 401:
                        console.log(error)
                        navigate("/login")
                        break;
                }
            })

    }, [])

    return (
        <>
            {loading && <Loader/>}
            <Container className="d-flex flex-column">
                <div className="d-flex flex-row m-2">
                    <div className="h4 w-25">ФИО</div>
                    <div className="col mt-3"><input disabled={!formEnabled} className="form-control" type="text"
                                                     placeholder={`${profileInfo.fullName}`}/></div>
                </div>
                <div className="d-flex flex-row m-2 align-items-center">
                    <div className="h4 w-25">Email</div>
                    <div className="col mt-3">{`${profileInfo.email}`}</div>

                </div>
                <div className="d-flex flex-row m-2">
                    <div className="h4 w-25">День рождения</div>
                    <div className="col mt-3">{`${(profileInfo.birthDate)}`}</div>

                </div>
                <div className="d-flex flex-row m-2">
                    <div className="h4 w-25">Пол</div>
                    <div className="col mt-3">
                        <select disabled={!formEnabled} className="form-select" placeholder={`${profileInfo.gender}`}>
                            <option>Мужчина</option>
                            <option>Женщина</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex flex-row m-2">
                    <div className="h4 w-25">Адрес</div>
                    <div className="col mt-3"><input disabled={!formEnabled} className="form-control" type="text"
                                                     placeholder={`${profileInfo.address}`}
                                                     onBlur={address.onBlur}
                                                     onChange={address.onChange}
                                                     value={address.value}/>
                    </div>
                </div>
                <div className="d-flex flex-row m-2">
                    <div className="h4 w-25">Телефон</div>
                    <div className="col mt-3"><input disabled={!formEnabled} className="form-control" type="text"
                                                     placeholder={`${profileInfo.phoneNumber}`}
                                                     onBlur={phone.onBlur}
                                                     onChange={phone.onChange}
                                                     value={phone.value}/>
                    </div>
                    />
                </div>
                {formEnabled && <div>
                    <Button variant="success" onClick={event => editProfileInfo({
                        phoneNumber: phone.value,
                        fullName: fullName.value,
                        address: address.value,
                        gender: gender.value,

                    })}>Ок</Button>
                    <Button variant="danger" onClick={setFormEnabled(false)}>Отмена</Button>
                </div>}
                {!formEnabled && <Button variant="primary" onClick={event => {
                    setFormEnabled(true)}}>Изменить</Button>}
            </Container>
        </>
    )
}

export default ProfileCard