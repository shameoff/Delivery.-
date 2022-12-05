import React, {useEffect, useState} from "react";
import DishCard from "./DishCard";
import {Container} from "react-bootstrap";
import axios from "axios";
import Loader from "../../components/Loader";
import PaginationTool from "../../components/PaginationTool";
import {getData} from "../../logic/getData";
import Filter from "./Filter";

function Dishes(props) {
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({})
    const [params, setParams] = useState({category: [], vegetarian: null, sorting: "PriceDesc"})
    useEffect(() => {
        getData(`/dish`, params)
            .then((response) => {
                setDishes(response.data.dishes)
                setPagination(response.data.pagination)
                setLoading(false)
            })
            .then(() => {
                console.log(dishes) // Почему выводит пустой массив?
            })
    }, [])

    return (
        <>
            {loading && <Loader/>}
            <Filter/>
            <Container className="p-3 mt-3 bg-light rounded-3 d-flex flex-wrap">
                <>{dishes.map((item, key) => <DishCard item={item} key={key}/>)}</>
            </Container>
            <PaginationTool pagination={pagination}></PaginationTool>
        </>
    )
}

export default Dishes