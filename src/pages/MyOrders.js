import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import PaginationTool from "../components/PaginationTool";
import Orders from "../components/Orders";

function MyOrders(props) {

    useEffect(() => {
        document.title = "Заказы"
    })

    return (
        <Container>
            <h1>Мои заказы</h1>

            <Orders/>

            <PaginationTool current="2"></PaginationTool>
        </Container>
    )
}

export default MyOrders