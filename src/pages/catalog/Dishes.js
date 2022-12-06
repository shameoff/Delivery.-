import React, {useEffect, useState} from "react";
import DishCard from "./DishCard";
import {Container} from "react-bootstrap";
import axios from "axios";
import Loader from "../../components/Loader";
import PaginationTool from "../../components/PaginationTool";
import {getData} from "../../logic/getData";
import Filter from "./Filter";
import {useParams} from "react-router-dom";

function Dishes(props) {
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({})
    const [params, setParams] = useState({categories: [], vegetarian: null, sorting: "PriceDesc", page: 1})
    let queryParams = useParams()

    useEffect(() => {
        console.log(params)
        getData(`/dish`, params)
            .then((response) => {
                setDishes(response.data.dishes)
                setPagination(response.data.pagination)
                setLoading(false)
            })
    }, [params])

    return (
        <>
            {loading && <Loader/>}
            <Filter onChange={setParams}/>
            <Container className="p-3 mt-3 bg-light rounded-3 d-flex flex-wrap">
                <>{dishes.map((item, key) => <DishCard item={item} key={key}/>)}</>
            </Container>
            <PaginationTool pagination={pagination}></PaginationTool>
        </>
    )
}

export default Dishes