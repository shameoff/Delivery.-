import React from "react";


function DishMini(props){
    return (
        <div>
            <img src={props.item.image}/>
            <h2>{props.item.name}</h2>
            <p>Категория блюда - {props.item.category}</p>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
            <p>isVegeterian? {`${props.item["vegetarian"]}`}</p>
        </div>
    )// Почему веганская ли еда показывается только таким костылем ??
}

export default DishMini