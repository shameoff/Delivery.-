import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Loader from "../components/Loader";


function getOrderInfo(id) {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api/order/${id}`)
        .catch(error => {
            console.log(error)
        })
}


function OrderPage() {
    const params = useParams()
    const [orderInfo, setOrderInfo] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getOrderInfo(params.orderId)
            .then((resp) => {
                setOrderInfo(resp.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading && <Loader/>}
            {JSON.stringify(orderInfo)}
            <>Order Page {params.orderId}</>
        </>
    )
}

export default OrderPage;