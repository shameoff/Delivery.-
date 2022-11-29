import React from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


function getOrderInfo(id) {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api/order/${id}`)
        .catch(error => {
            console.log(error)
        })
}


function Order(props) {
    const params = useParams()

    return (

        <>Order Page {params.orderId}</>
    )
}

export default Order;