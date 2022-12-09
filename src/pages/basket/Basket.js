import React, {useEffect, useState} from "react";
import {getData, getPrivateData} from "../../logic/getData";
import {useNavigate} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import DishCard from "../catalog/DishCard";
import {PositionCard} from "./PositionCard";
import {order} from "../../logic/order";


export function Basket(props) {

    const [basketData, setBasketData] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    function loadItems() {
        return getPrivateData('/basket')
            .then((resp) => {
                setBasketData(resp.data)
                setLoading(false)
            })
            .catch((error) => {
                switch (error.status) {
                    case "401":
                        navigate("/")
                        break;
                }
            })
    }

    function createOrder() {
        order()
    }

    useEffect(() => {
        loadItems()
    }, [])

    return (
        <>
            <Container className="p-3 mt-3 bg-light rounded-3 d-flex flex-wrap justify-content-center">
                {basketData.length === 0  && <h2>В корзине нет товаров!</h2>}
                <>{basketData.map((item, key) => <PositionCard item={item} reloadItems={loadItems} key={key}/>)}</>
                <Button onClick={e => createOrder()}></Button>
            </Container>
        </>
    )
}