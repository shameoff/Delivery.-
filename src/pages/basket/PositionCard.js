import React, {useState} from "react";
import {addToCart, deleteFromCart} from "../../logic/order";
import {Link, useNavigate} from "react-router-dom";
import {Button, Card, Container} from "react-bootstrap";


export function PositionCard(props) {
    const item = props.item
    const reloadPage = props.reloadItems
    const [value, setValue] = useState(Number(item.amount))
    const navigate = useNavigate()


    function onAdd(e) {
        addToCart(props.item.id)
            .catch((error) => {
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
                if (!increase) {
                    setValue(0)
                    reloadPage()
                } else {
                    setValue(value - 1)
                    if (value <= 0) reloadPage()
                }
            })
    }


    return (
        <Container
            className="border border-2 h-25 m-1 p-2 d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap">
            <div className="d-flex flex-md-row flex-column">
                <div className="m-1 col-md-4"><img src={item.image} width="100%" className="rounded"/></div>
                <div>
                    <div>
                        <Link to={`/dish/${item.id}`} className="text-decoration-none display-6">{item.name}</Link>
                        <div className="d-inline-flex m-1">
                            <Button onClick={event => onDelete(event, true)} className="w-auto">-</Button>
                            <p className="m-2">{value}</p>
                            <Button onClick={event => onAdd(event)} className="w-auto">+</Button>
                        </div>
                    </div>
                    <div><p>Цена за шт: {item.price} &#8381;</p></div>
                </div>
            </div>

            <Button className="m-2" variant="danger" onClick={e => onDelete(e, false)}>Удалить</Button>
        </Container>
    )
}