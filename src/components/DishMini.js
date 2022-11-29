import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";
import Loader from "./Loader";

function DishMini(props) {
    const [imgLoading, setImgLoading] = useState(true)
    let isVegetarian = props.item["vegetarian"]
    return (
        <Card style={{width: "15rem", height: "20", margin: "5px"}}>
            <Card.Img variant="top" src={props.item.image}/>
            {isVegetarian && <Card.ImgOverlay>VEGAN FOOD</Card.ImgOverlay>}
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Subtitle>Категория: {props.item.category}</Card.Subtitle>
                <Card.Text>{props.item.description}</Card.Text>
                <p>{props.item.price} &#8381;</p>
                <Button variant="outline-secondary">В корзину!</Button>
            </Card.Body>
        </Card>
    )// Почему веганская ли еда показывается только таким костылем c кавычками??
}

export default DishMini