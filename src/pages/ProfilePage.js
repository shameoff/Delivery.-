import React from "react";
import ProfileCard from "./profile/ProfileCard";
import {Container} from "react-bootstrap";

function ProfilePage(props) {
    return (
        <Container className="pt-5, mt-3 m-auto rounded-3 bg-light d-block align-content-center">
            <h1>Мой профиль: </h1>
            <ProfileCard/>
        </Container>
    )
}

export default ProfilePage;