import axios from "axios";

export function authorize(item) {
    let URL = process.env.REACT_APP_API_URL
    return axios.post(`${URL}/api/account/login`, item)
        .catch(error => {
            console.log(error.response.data)
        })
        .then(resp => {
            // console.log(resp.data)
        })
}



