import React from "react";
import {Button, Modal} from "react-bootstrap";

function ModalError(props) {
    return (
        <Modal centered {...props}>
            <Modal.Body><h4>{props.error.title ? props.error.title : props.error.message}</h4></Modal.Body>
            <Button variant="primary" className="m-2" onClick={props.onHide}>Close</Button>
        </Modal>
    )
}


export default ModalError