import React from "react";
import DishMini from "./DishMini";
import {Container} from "react-bootstrap";

function Dishes(props) {
    return (
        <Container className="p-3 mt-3 bg-light rounded-3 d-flex flex-wrap">
            {props.items.map((item, key) => <DishMini item={item} key={key}/>)}
        </Container>
    )
}

export default Dishes