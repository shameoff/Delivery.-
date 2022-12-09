import React, {useState} from "react";
import {addToCart, deleteFromCart} from "../../logic/order";
import {Link, useNavigate} from "react-router-dom";
import {Button, Card} from "react-bootstrap";


export function PositionCard(props) {
    const item = props.item
    const reloadPage = props.reloadItems
    const [value, setValue] = useState(Number(item.amount))
    const navigate = useNavigate()


    function onAdd(e) {
        addToCart(props.item.id)
            .catch((error) => {
                console.log("DELETE")
                switch (error.status) {
                    case 401:
                        navigate("/login")
                        break;
                }
            })
            .then(() => {
                setValue(value + 1)
            })
    }

    function onDelete(e, increase = true) {
        deleteFromCart(props.item.id, increase)
            .catch((error) => {
                switch (error.status) {
                    case 401:
                        navigate("/login")
                        break;
                }
            })
            .then(() => {
                if (!increase){
                    setValue(0)
                    reloadPage()
                } else {
                    setValue(value - 1)
                    if (value <= 0) reloadPage()
                }
            })
    }


    return (
        <div className="w-100 h-25 m-1">
            <div className="d-flex justify-content-between m-1">
                <div className=""> {/* Тут дисплей флекс вроде нужен*/}
                    <div className="m-1"><img src={item.image} width="15%" className="rounded"/></div>
                    <div>
                        <div>
                            <Link to={`/dish/${item.id}`}>{item.name}</Link>
                            <div className="d-inline-flex m-1">
                                <Button onClick={event => onDelete(event, true)} className="w-auto">-</Button>
                                <p className="m-2">{value}</p>
                                <Button onClick={event => onAdd(event)} className="w-auto">+</Button>
                            </div>
                        </div>
                        <div><p>Цена за шт: {item.price} &#8381;</p></div>
                    </div>
                </div>
                <Button variant="danger" onClick={e => onDelete(e, false)}>Удалить</Button>
            </div>
        </div>
    )
}