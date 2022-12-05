import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";
import Loader from "../../components/Loader";
import {Link} from "react-router-dom";
import axios from "axios";

function OrderCard(props) {
    let LinkToDetails = `/orders/${props.item.id}`
    return (
        <Card style={{width: "15rem", height: "20", margin: "5px"}}>
            <Card.Img variant="top" src={props.item.image}/>
            <Card.Body>
                <Card.Title><Link to={LinkToDetails}>{props.item.name}</Link></Card.Title>
                <Card.Subtitle>Подзаголовок </Card.Subtitle>
                <Card.Text>{props.item.description}</Card.Text>
                <p> Стоимость в рублях: &#8381;</p>
            </Card.Body>
        </Card>
    )
}

export default OrderCard