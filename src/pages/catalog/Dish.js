import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {getData} from "../../logic/getData";
import Loader from "../../components/Loader";
import StarRating from 'react-bootstrap-star-rating';


export function Dish(props) {

    const [loading, setLoading] = useState(true)
    const [dishInfo, setDishInfo] = useState({})
    let params = useParams()

    useEffect(() => {
        getData(`/dish/${params.id}`)
            .then((resp) => {
                setDishInfo(resp.data)
                setLoading(false)
            })
    }, [])


    return (
        <>
            {loading && <Loader/>}
            <Container className="mt-3 border border-5 rounded">

                <h1>{dishInfo.name}</h1>
                <div className="m-2 mb-4 d-flex flex-column justify-content-between align-items-center">
                    <img src={dishInfo.image} className="rounded-3 w-50"/>
                    <small>Категория блюда: {dishInfo.category}</small>
                    <small>{dishInfo.vegetarian? "Вегетерианское" : "Не вегетерианское"}</small>
                    <text>{dishInfo.description}</text>
                    <StarRating defaultValue={3}
                                min={0}
                                max={10}
                                step={0.5}
                                onRatingChange={e => {
                                    console.log(e)
                                }}
                    />
                    <div className="text-uppercase">Цена: {dishInfo.price} руб./шт</div>
                </div>
            </Container>
        </>
    )
}