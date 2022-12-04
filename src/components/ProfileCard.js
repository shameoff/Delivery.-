import React, {useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import Loader from "./Loader";
import {Link} from "react-router-dom";
import axios from "axios";
import {getData, getPrivateData} from "../logic/getData";


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
                {profileInfo.fullName}
            </Container>
        </>
    )
}

export default ProfileCard