import React, {useEffect, useState} from "react";
import Dishes from "./catalog/Dishes";
import Loader from "../components/Loader";
import {Container} from "react-bootstrap";
import {getData} from "../logic/getData";

function CatalogPage(props) {

    useEffect(() => {
        document.title = "delivery.Кушац"
    })

    return (
        <Container>
            <h1>Каталог блюд</h1>

            <Dishes></Dishes>

        </Container>
    )
}

export default CatalogPage