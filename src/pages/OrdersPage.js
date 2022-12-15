import React, {useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import Orders from "./order/Orders";
import {getPrivateData} from "../logic/getData";
import {useNavigate} from "react-router-dom";
import {order} from "../logic/order";

function OrdersPage(props) {
    const navigate = useNavigate()
    const [cartIsNotEmpty, setCartIsNotEmpty] = useState(false)
    useEffect(() => {
        document.title = "Заказы"
    })
    getPrivateData("/basket")
        .catch((error) => {
            switch (error.status) {
                case 401:
                    console.log(error)
                    navigate("/login")
                    break;
            }
        })
        .then((resp) => {
                setCartIsNotEmpty(resp.data.length > 0)
        })
    return (
        <Container className="border-2 border-light mt-3">
            {cartIsNotEmpty &&
                <Container className="m-3 border border-2 d-flex justify-content-between rounded-2">
                    <p className="m-3">В корзине есть блюда, можно оформить заказ</p>
                    <Button variant="success" className="m-2" onClick={event => navigate("/cart")}>Оформить</Button>
                </Container>}

            <Container className="m-0 mt-3">
                <h1>Последние заказы</h1>
                <Orders/>
            </Container>
        </Container>
    )
}

export default OrdersPage