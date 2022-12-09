import axios from "axios";

export function getData(URI) {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api${URI}`)
        .catch(error => {
            console.log(error)
        })
}

export function getPrivateData(URI) {
    let URL = process.env.REACT_APP_API_URL
    let token = localStorage.getItem("token")
    return axios.get(`${URL}/api${URI}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err) => {
            return new Promise((resolve, reject) => {
                reject (err.response)
            })
        })
}