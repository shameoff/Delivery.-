import React, {useEffect, useState} from "react";
import DishCard from "./DishCard";
import {Container} from "react-bootstrap";
import axios from "axios";
import Loader from "../../components/Loader";
import {getData, getPrivateData} from "../../logic/getData";
import {useNavigate} from "react-router-dom";

function getDishList() {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api/dish`)
        .catch(error => {
            console.log(error)
        })
}


function Dishes(props) {
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getPrivateData("/basket")
            .then((resp) => {
                setCartItems(resp.data)
            })
            .catch((error) => {
                switch (error.status) {
                    case "401":
                        setCartItems([])
                        break;
                }
            })
    }, [])


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
        <>
            {loading && <Loader/>}
            <Container className="p-3 mt-3 bg-light rounded-3 d-flex flex-wrap">
                <>{dishes.map((item, key) => <DishCard item={item} cartItems={cartItems} key={key}/>)}</>
            </Container>
        </>
    )
}

export default Dishes