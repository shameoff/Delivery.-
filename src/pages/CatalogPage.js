import React, {useEffect, useState} from "react";
import Dishes from "./catalog/Dishes";
import {Container} from "react-bootstrap";

function CatalogPage(props) {

    useEffect(() => {
        document.title = "delivery.Кушац"
    })

    return (
        <Container className="mt-3">
            <h1>Каталог блюд</h1>

            <Dishes searchParams={props.searchParams} setSearchParams={props.setSearchParams}></Dishes>

        </Container>
    )
}

export default CatalogPage