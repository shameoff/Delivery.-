import React from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function getDishDetails(id) {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api/dish/{id}`)
        .catch(error => {
            console.log(error)
        })
}


function Dish(props) {
    const params = useParams()

    return (
        <>Dish Page {params.orderId}</>
    )
}

export default Dish;