import React from "react";
import DishMini from "./DishMini";

function Dishes(props) {
    return (
        <>
            {props.items.map((item, key) => <DishMini item={item} key={key}/>)}
        </>
    )
}

export default Dishes