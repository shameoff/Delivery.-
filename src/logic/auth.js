import axios from "axios";
import {useEffect} from "react";

export function authorize(item) {
    let URL = process.env.REACT_APP_API_URL
    return axios.post(`${URL}/api/account/login`, item)
        .catch(error => {
            console.log(error.response.data)
        })
}



