import axios from "axios";

export function authorize(email, password) {
    let URL = process.env.REACT_APP_API_URL
    return axios.post(`${URL}/api/account/login`, {
        "email": email,
        "password": password
    }).catch(error => {
        return new Promise((resolve, reject) => {
            reject(error.response.data)
        })
    })
}

export function isAuthorized() {
    return localStorage.getItem("token") ? true : false
}

export function register(item) {
    let URL = process.env.REACT_APP_API_URL
    console.log(item)
    return axios.post(`${URL}/api/account/register`, item)
        .catch(error => {
            console.log(error)
        })
}

export function fillModalWithError(error) {

}