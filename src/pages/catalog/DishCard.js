import React, {useEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {addToCart, deleteFromCart} from "../../logic/order";


function DishCard(props) {
    const navigate = useNavigate()
    let item = props.item
    const [inBasket, setInBasket] = useState(0)

    useEffect(() => {
        props.cartItems.forEach((cartItem) => {
            if (cartItem.id === props.item.id) setInBasket(cartItem.amount)
        })
    }, [props.cartItems])

    function onAdd(e) {
        addToCart(props.item.id)
            .catch((error) => {
                switch (error.status) {
                    case 401:
                        navigate("/login")
                        break;
                }
            })
            .then(() => {
                setInBasket(inBasket + 1)
            })
    }

    function onDelete(e) {
        deleteFromCart(props.item.id)
            .catch((error) => {
                switch (error.status) {
                    case 401:
                        navigate("/login")
                        break;
                }
            })
            .then(() => {
                setInBasket(inBasket - 1)
            })
    }

    return (
        <Card style={{width: "15rem", height: "20", margin: "5px"}}>
            <Card.Img variant="top" src={item.image}/>
            {item.vegetarian && <Card.ImgOverlay>VEGAN FOOD</Card.ImgOverlay>}
            <Card.Body>
                <Card.Title><Link to={`/dish/${item.id}`}>{item.name}</Link></Card.Title>
                <Card.Subtitle>Категория: {item.category}</Card.Subtitle>
                <Card.Subtitle>Рейтинг: {item.rating.toFixed(3)}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center m-1">
                    <h4>{item.price} &#8381;</h4>
                    <div className="d-flex justify-content-between m-1">
                        {inBasket === 0 ?
                            <Button variant="outline-secondary" onClick={e => onAdd(e)}>В корзину!</Button> :
                            <>
                                <Button onClick={event => onDelete(event)} className="w-auto">-</Button>
                                <p className="m-2">{inBasket}</p>
                                <Button onClick={event => onAdd(event)} className="w-auto">+</Button>
                            </>}
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default DishCard