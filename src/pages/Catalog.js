import React, {useEffect, useState} from "react";
import axios from "axios";
import Dishes from "./catalog/Dishes";
import Loader from "../components/Loader";
import {Container} from "react-bootstrap";

async function getDishList() {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api/dish`)
        .catch(error => {
            console.log(error)
        })
}


function Catalog(props) {
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "delivery.Кушац"
    })

    useEffect(() => {
        getDishList()
            .then((response) => {
                setDishes(response.data.dishes)
                setLoading(false)
            })
            .then(() => {
                console.log(dishes) // Почему выводит пустой массив?
            })
    }, [])
    return (
        <Container>
            <h1>Каталог блюд</h1>
            {loading && <Loader/>}
            <Dishes items={dishes}></Dishes>
        </Container>
    )
}

export default Catalog