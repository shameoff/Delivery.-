import React, {useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import Loader from "./Loader";
import {Link} from "react-router-dom";
import axios from "axios";

function getProfileInfo(id) {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api/account/profile`)
        .catch(error => {
            console.log(error)
        })
}


function ProfileCard(props) {
    const [profileInfo, setProfileInfo] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProfileInfo(props.id)
            .then((resp) => {
                setProfileInfo(resp.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading && <Loader/>}
            <Container style={{margin: "5px"}}>
                {profileInfo.fullName}
            </Container>
        </>
    )
}

export default ProfileCard