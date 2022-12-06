import axios from "axios";


export function deleteFromCart(id, increase = false) {
    let URL = process.env.REACT_APP_API_URL
    let token = localStorage.getItem("token")
    return axios.delete(`${URL}/basket/dish/${id}?increase=${increase}`)
        .catch(error => {
                return new Promise((resolve, rejected) => {
                    rejected(error.response.data)
                })
            }
        )
}

export function addToCart(id) {
    let URL = process.env.REACT_APP_API_URL
    let token = localStorage.getItem("token")
    return axios.post(`${URL}/basket/dish/${id}`)
        .catch(error => {
                return new Promise((resolve, rejected) => {
                    rejected(error.response.data)
                })
            }
        )
}