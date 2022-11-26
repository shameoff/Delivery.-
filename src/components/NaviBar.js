import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, Button} from "react-bootstrap";

function NaviBar(props) {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Navbar.Brand>Delivery.Кушац</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav >
                        <Nav.Link><Link to="/">Меню</Link></Nav.Link>
                        <Nav.Link><Link to="/orders">Заказы</Link></Nav.Link>
                        <Nav.Link><Link to="/basket">Корзина</Link></Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link><Link to="/profile">Профиль</Link></Nav.Link>
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