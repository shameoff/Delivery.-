import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {confirmOrderDelivery} from "../../logic/order";

function OrderCard(props) {
    return (
        <div className="d-flex justify-content-between mb-2 rounded border border-2">
            <div className="d-block m-2">
                <Link to={`/order/${props.item.id}`}>Заказ #{props.item.id}</Link>
                <div>Статус заказа - {props.item.status === "InProcess" ? "в обработке" : "доставлен"}</div>
                <div>{props.item.status === "InProcess" ?
                    `Доставка ожидается ${props.item.deliveryTime}` :
                    `Заказ доставлен ${props.item.deliveryTime}`}
                </div>
            </div>
            <div className="d-block m-2">
                {props.item.status === "InProcess" && <Button variant="success" onClick={event => confirmOrderDelivery(props.item.id)}>Подтвердить доставку</Button>}
                <div className="d-flex justify-content-around"><p className="fw-bold">Стоимость заказа:</p>{props.item.price}</div>
            </div>
        </div>
    )
}

export default OrderCard