import React, {useEffect, useState} from "react";
import axios from "axios";
import Dishes from "../components/Dishes";
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
                // !!! Позволяет проверить, как крутится загрузка!!!
                // setTimeout(() => {
                //     setDishes(response.data.dishes)
                //     setLoading(false)
                // }, 2000)
                setDishes(response.data.dishes)
            })
            .then(() => {
                console.log(dishes) // Почему выводит пустой массив?
            })
    }, [])
    return (
        <>
            {loading && <Loader/>}
            <Dishes items={dishes}></Dishes>
        </>
    )
}

export default Catalog