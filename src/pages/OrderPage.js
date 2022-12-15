import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../components/Loader";
import {getPrivateData} from "../logic/getData";
import {Button, Container} from "react-bootstrap";
import {confirmOrderDelivery} from "../logic/order";
import {DishRow} from "./order/DishRow";
import button from "bootstrap/js/src/button";

function OrderPage() {
    const params = useParams()
    const [orderInfo, setOrderInfo] = useState({dishes: []})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getPrivateData(`/order/${params.id}`)
            .then((resp) => {
                setOrderInfo(resp.data)
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
            <Container className="mt-3 border border-5 rounded">
                <div className="d-flex justify-content-between m-2">
                    <div className="display-6">Заказ # {orderInfo.id}</div>
                    {orderInfo.status === "InProcess" && <Button variant="outline-success" onClick={event => {
                        confirmOrderDelivery(orderInfo.id)
                    }}>Подтвердить доставку</Button>}
                </div>
                <div className="d-block m-2 ">
                    <p> Дата заказа: {" "} {orderInfo.orderTime}</p>
                    <p> Дата доставки: {" "} {orderInfo.deliveryTime}</p>
                    <p> Адрес доставки: {" "} {orderInfo.address}</p>
                    <p> Статус заказа: {" "} {orderInfo.status}</p>
                </div>

                <div className="d-block m-2">
                    Список блюд:
                    <div className="border border-2 rounded-3">
                        {orderInfo.dishes.map((item, key) => <DishRow item={item}  key={key}></DishRow>)}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default OrderPage;