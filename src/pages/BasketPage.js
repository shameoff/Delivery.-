import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import {Basket} from "./basket/Basket";

function BasketPage(props) {

    useEffect(() => {
        document.title = "Корзина"
    })

    return (
        <Container>
            <h1>Товары в корзине</h1>

            <Basket/>

        </Container>
    )
}

export default BasketPage;