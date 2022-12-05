import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Loader from "../../components/Loader";
import {Container} from "react-bootstrap";
import OrderCard from "./OrderCard";


function getOrders(id) {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api/order`)
        .catch(error => {
            console.log(error)
        })
}


function Orders(props) {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getOrders(props.id)
            .then((resp) => {
                setOrders(resp.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading && <Loader/>}
            <Container className="p-3 mt-3 bg-light rounded-3 d-flex flex-wrap">
                <>{orders.map((item, key) => <OrderCard item={item} key={key}/>)}</>
            </Container>
        </>
    )
}

export default Orders;
