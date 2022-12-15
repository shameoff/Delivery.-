import React, {useEffect, useState} from "react";
import {getData, getPrivateData} from "../../logic/getData";
import {useNavigate} from "react-router-dom";
import {Button, Container, Form, FormText} from "react-bootstrap";
import {PositionCard} from "./PositionCard";
import {order} from "../../logic/order";
import Loader from "../../components/Loader";
import {useInput} from "../../logic/inputs";
import {toIsoString} from "../../logic/inputs";

export function Basket(props) {

    let nearestTimeForDelivery = new Date()
    nearestTimeForDelivery.setHours(nearestTimeForDelivery.getHours() + 1)

    let maxTimeForDelivery = new Date()
    maxTimeForDelivery.setDate(maxTimeForDelivery.getDate() + 7)

    let currentTime = new Date()
    currentTime.setHours(currentTime.getHours() + 1)
    currentTime.setMinutes(currentTime.getMinutes() + 15)

    const [basketData, setBasketData] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const address = useInput("", {isNotEmpty: true, minLength: 6})
    const deliveryTime = useInput(toIsoString(currentTime), {isNotEmpty: true})


    function loadItems() {
        return getPrivateData('/basket')
            .then((resp) => {
                setBasketData(resp.data)
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
    }

    function createOrder() {
        order(deliveryTime.value, address.value)
            .then((resp) => {
                navigate("/orders")
            })
            .catch(error => {
                switch (error.status){
                    case 400:
                        navigate("/")
                        break;
                    case 401:
                        navigate("/login")
                        break;
                }
            })
    }

    useEffect(() => {
        loadItems()
    }, [])

    return (
        <>
            {loading && <Loader/>}
            <Container className="p-3 mt-3 bg-light rounded-3 d-flex flex-wrap justify-content-center">
                {basketData.length === 0 ?
                    <h2>В корзине нет товаров!</h2> :
                    <>
                        <Container className="d-flex flex-md-row flex-column">
                            <input className="form-control w-50 mb-2 me-1" type="datetime-local"
                                   defaultValue={deliveryTime.value}
                                   min={toIsoString(nearestTimeForDelivery)}
                                   max={toIsoString(maxTimeForDelivery)}
                                   onChange={deliveryTime.onChange}
                                   onBlur={deliveryTime.onBlur}/>
                            <div className="w-50 mb-2 ms-1">
                                <input className="form-control " type="text"
                                       placeholder="Введите адрес"
                                       onChange={address.onChange}
                                       onBlur={address.onBlur}/>
                                <small
                                    className="text-danger">{(!(address.inputValid) && address.isDirty)  && "Укажите, пожалуйста, адрес!"}</small>
                            </div>
                        </Container>
                        <>{basketData.map((item, key) => <PositionCard item={item} reloadItems={loadItems}
                                                                       key={key}/>)}</>
                        <Button onClick={e => createOrder()}
                                disabled={!(address.inputValid) || !(deliveryTime.inputValid)}>Оформить заказ</Button>
                    </>
                }
            </Container>
        </>
    )
}