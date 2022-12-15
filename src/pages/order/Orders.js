import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../../components/Loader";
import {Container} from "react-bootstrap";
import OrderCard from "./OrderCard";
import {getPrivateData} from "../../logic/getData";


function Orders(props) {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getPrivateData(`/order`)
            .then((resp) => {
                setOrders(resp.data)
                setLoading(false)
            })
            .catch((error) => {
            switch (error.status) {
                case 401:
                    console.log(error)
                    navigate("/login")
                    break;
            }
        })
    }, [])

    return (
        <>
            {loading && <Loader/>}
            <Container className="p-3 mt-3 bg-light rounded-3 d-block">
                <>{orders.map((item, key) => <OrderCard item={item} key={key}/>)}</>
            </Container>
        </>
    )
}

export default Orders;
