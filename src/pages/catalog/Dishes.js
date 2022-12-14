import React, {useEffect, useState} from "react";
import DishCard from "./DishCard";
import {Container} from "react-bootstrap";
import Loader from "../../components/Loader";
import PaginationTool from "./PaginationTool";
import Filter from "./Filter";
import {useNavigate, useParams} from "react-router-dom";
import {getData, getPrivateData} from "../../logic/getData";


function Dishes(props) {
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({})
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState([])

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
        getData(`/dish`, props.searchParams)
            .then((response) => {
                setDishes(response.data.dishes)
                setPagination(response.data.pagination)
                setLoading(false)
            })
    }, [props.searchParams])

    function onFilterChange(item) {
        console.log(props.searchParams)
        props.setSearchParams({
            ...props.searchParams,
            ...item,
            page: 1
        })
    }
    function onPageChange (page) {
        props.setSearchParams({
            ...props.searchParams,
            page: page
        })
        console.log(props.searchParams)
        return
    }
    return (
        <>
            {loading && <Loader/>}
            <Filter onSubmit={onFilterChange}/>
            <Container className="p-3 mt-3 bg-light rounded-3 d-flex flex-wrap">
                <>{dishes.map((item, key) => <DishCard item={item} cartItems={cartItems} key={key}/>)}</>
            </Container>
            <PaginationTool className pagination={pagination} onChange={onPageChange}></PaginationTool>
        </>
    )
}

export default Dishes