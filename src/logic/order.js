import axios from "axios";


export function deleteFromCart(id, increase = true) {
    let URL = process.env.REACT_APP_API_URL
    let token = localStorage.getItem("token")
    return axios.delete(`${URL}/api/basket/dish/${id}?increase=${increase}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .catch(error => {
                return new Promise((resolve, rejected) => {
                    rejected(error.response)
                })
            }
        )
}

export function addToCart(id) {
    let URL = process.env.REACT_APP_API_URL
    let token = localStorage.getItem("token")
    return axios.post(`${URL}/api/basket/dish/${id}`,
        {},{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .catch(error => {
                return new Promise((resolve, rejected) => {
                    rejected(error.response)
                })
            }
        )
}

export function order(deliveryTime, address) {
    let URL = process.env.REACT_APP_API_URL
    let token = localStorage.getItem("token")
    return axios.post(`${URL}/api/order`,
        {
            deliveryTime: deliveryTime,
            address: address
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .catch(error => {
                return new Promise((resolve, rejected) => {
                    rejected(error.response)
                })
            }
        )
}