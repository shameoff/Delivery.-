import React from "react";
import {Container} from "react-bootstrap";

function Footer(props) {
    return (
        <Container fluid style={{
            backgroundColor: "whitesmoke",
            color: "gray",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0
        }}>
            <Container style={{display: "flex", padding: "10px"}}>
                &#169; 2022 &#x2022; Delivery.Кушац
            </Container>
        </Container>
    )
}

export default Footer