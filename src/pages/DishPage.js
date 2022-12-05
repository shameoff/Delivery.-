import React from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


function DishPage(props) {
    const params = useParams()

    return (
        <>Dish Page {params.orderId}</>
    )
}

export default DishPage;