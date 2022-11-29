import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";
import Loader from "./Loader";
import {Link} from "react-router-dom";
import axios from "axios";

async function TitleLink(id) {
    let URL = process.env.REACT_APP_API_URL
    return `${URL}/api/dish/${id}`
}


function DishCard(props) {
    const [imgLoading, setImgLoading] = useState(true)
    let isVegetarian = props.item["vegetarian"]
    let LinkToDetails = `/dish/${props.item.id}`
    return (
        <Card style={{width: "15rem", height: "20", margin: "5px"}}>
            <Card.Img variant="top" src={props.item.image}/>
            {isVegetarian && <Card.ImgOverlay>VEGAN FOOD</Card.ImgOverlay>}
            <Card.Body>
                <Card.Title><Link to={LinkToDetails}>{props.item.name}</Link></Card.Title>
                <Card.Subtitle>Категория: {props.item.category}</Card.Subtitle>
                <Card.Text>{props.item.description}</Card.Text>
                <p>{props.item.price} &#8381;</p>
                <Button variant="outline-secondary">В корзину!</Button>
            </Card.Body>
        </Card>
    )
}

export default DishCard