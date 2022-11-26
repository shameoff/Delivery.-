import React from "react";
import axios from "axios";

async function getData(){
    let URL = process.env.REACT_APP_API_URL
    return await axios.get(`${URL}/api/dish`)
        .then(function (response){
            console.log(response)
        })
}

function Catalog(props){
    console.log(getData())
    return (
        <></>
    )
}

export default Catalog;