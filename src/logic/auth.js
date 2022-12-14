import axios from "axios";

export function authorize(item) {
    let URL = process.env.REACT_APP_API_URL
    return axios.post(`${URL}/api/account/login`, item)
        .catch(error => {
            console.log(error.response.data)
        })
}

export function register(item) {
    let URL = process.env.REACT_APP_API_URL
    console.log(item)
    return axios.post(`${URL}/api/account/register`, item)
        .catch(error => {
            console.log(error)
        })
}