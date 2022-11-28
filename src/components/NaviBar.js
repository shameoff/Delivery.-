import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, Button} from "react-bootstrap";

function NaviBar(props) {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className="rounded-2 ps-2 pe-2">
                <Navbar.Brand>Delivery.Кушац</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Меню</Nav.Link>
                        <Nav.Link href="/orders">Заказы</Nav.Link>
                        <Nav.Link href="/basket">Корзина</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="/profile">Профиль</Nav.Link>
                        <Button variant='primary' className="ms-2 mb-1">Log In</Button>
                        <Button variant='primary' className="ms-2 mb-1">Sign In</Button>
                        <Button variant='primary' className="ms-2 mb-1">Log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default NaviBar;