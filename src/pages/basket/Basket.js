import React, {useEffect, useState} from "react";
import {getData, getPrivateData} from "../../logic/getData";


export function Basket(props) {

    const [basketData, setBasketData] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        getPrivateData('/basket')
            .then((resp) => {
                console.log(resp.data)
                setBasketData(resp.data)
            })
    }, [])

    return (
        <>
            {JSON.stringify(basketData)}
        </>
    )
}