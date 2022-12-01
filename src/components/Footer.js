import React from "react";
import {Container} from "react-bootstrap";

function Footer(props) {
    return (
        <Container fluid className="fixed-bottom" style={{
            backgroundColor: "whitesmoke",
            color: "gray",
            height: "40px"
        }}>
            <Container style={{display: "flex", padding: "10px"}}>
                &#169; 2022 &#x2022; Delivery.Кушац
            </Container>
        </Container>
    )
}

export default Footer