import React, {useEffect, useState} from "react";
import Dishes from "./catalog/Dishes";
import Loader from "../components/Loader";
import {Container} from "react-bootstrap";
import {getData} from "../logic/getData";

function Catalog(props) {
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "delivery.Кушац"
    })

    useEffect(() => {
        getData("/dish")
            .then((response) => {
                setDishes(response.data.dishes)
                setLoading(false)
            })}, [])
    return (
        <Container>
            <h1>Каталог блюд</h1>
            {loading && <Loader/>}
            <Dishes items={dishes}></Dishes>
        </Container>
    )
}

export default Catalog