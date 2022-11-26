import React from "react";
import DishMini from "./DishMini";

function Dishes(props) {
    return (
        <div className='food-container'>
            {props.items.map((item, key) => <DishMini item={item} key={key}/>)}
        </div>
    )
}

export default Dishes