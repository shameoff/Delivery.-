import React, {useEffect, useState} from "react";
import Dishes from "./catalog/Dishes";
import Loader from "../components/Loader";
import {Container} from "react-bootstrap";
import {getData} from "../logic/getData";
import PaginationTool from "../components/PaginationTool";

function CatalogPage(props) {

    useEffect(() => {
        document.title = "delivery.Кушац"
    })
    
    return (
        <Container>
            <h1>Каталог блюд</h1>

            <Dishes></Dishes>

            <PaginationTool current="2"></PaginationTool>
        </Container>
    )
}

export default CatalogPage