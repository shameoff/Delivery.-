import React from "react";


export function DishRow(props) {

    const item = props.item

    return (
        <div className="d-flex justify-content-between rounded-5">
            <div className="d-flex flex-row w-25">
                <div className="m-2"><img src={item.image} width="100%" className="rounded-5"/></div>
                <div className="m-2">
                    <strong>{item.name}</strong>
                    <p className="flex-md-nowrap">Цена: {item.price }</p>
                    <p className="flex-md-nowrap">Количество: {item.amount}</p>
                </div>
            </div>
            <div className="d-block justify-content- m-2">
                <div><strong>Стоимость:</strong>{` ${item.totalPrice} руб.`}</div>
            </div>
        </div>
    )

}