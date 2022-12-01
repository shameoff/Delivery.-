import axios from "axios";

export function getData(URI) {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api${URI}`)
        .catch(error => {
            console.log(error)
        })
}