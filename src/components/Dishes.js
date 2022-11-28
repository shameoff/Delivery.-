import React from "react";
import DishMini from "./DishMini";
import {Container} from "react-bootstrap";

function Dishes(props) {
    return (
        <Container className="p-4 mt-2 bg-light rounded-3 d-flex justify-content-between">
            {props.items.map((item, key) => <DishMini item={item} key={key}/>)}
        </Container>
    )
}

export default Dishes