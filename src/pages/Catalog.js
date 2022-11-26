import React, {useEffect, useState} from "react";
import axios from "axios";
import Dishes from "../components/Dishes";
import Loader from "../components/Loader";

async function getDishList() {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api/dish`)
        .catch(error => {
            console.log(error)
        })
}


function Catalog(props) {
    const [dishes, setDishes] = useState([])
    const [loaging, setLoading] = useState(true)

    useEffect(() => {
        getDishList()
            .then((response) => {
                // !!! ПОТОМ УБРАТЬ ТАЙМАУТ !!!
                setTimeout(() => {
                    setDishes(response.data.dishes)
                    setLoading(false)
                }, 2000)
            })
            .then(() => {
                console.log(dishes) // Почему выводит пустой массив?
            })
    }, [])
    return (
        <>
            {loaging && <Loader/>}
            <Dishes items={dishes}></Dishes>
        </>
    )
}

export default Catalog