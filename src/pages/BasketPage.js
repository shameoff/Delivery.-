import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import Dishes from "./catalog/Dishes";
import PaginationTool from "../components/PaginationTool";
import {Basket} from "./basket/Basket";

function BasketPage(props) {

    useEffect(() => {
        document.title = "Корзина"
    })

    return (
        <Container>
            <h1>Корзина</h1>

            <Basket/>

        </Container>
    )
}

export default BasketPage;