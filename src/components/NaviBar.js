import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Navbar, Nav, Button} from "react-bootstrap";
import {getPrivateData} from "../logic/getData";
import {logout} from "../logic/auth";

function NaviBar(props) {

    const [authorizedEmail, setAuthorizedEmail] = useState(false)
    const navigate = useNavigate()
    const [basketAmount, setBasketAmount] = useState(false)
    useEffect(() => {

        getPrivateData("/account/profile")
            .catch((error) => {
                switch (error.status) {
                    case 401:
                        console.log("Не авторизован")
                        setAuthorizedEmail(false)
                        break
                }
            })
            .then(resp => {
                setAuthorizedEmail(resp.data.email)
            })

        getPrivateData("/basket")
            .catch((error) => {
                switch (error.status) {
                    case 401:
                        console.log("Не авторизован для получения данных корзины")
                        setBasketAmount(false)
                        break
                }
            })
            .then(resp => {
                setBasketAmount(resp.data.map(item => item.amount).reduce((prev, next) => prev + next))
            })
    }, [])

    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className="rounded-2 ps-2 pe-2">
                <Navbar.Brand href="/">Delivery.Кушац</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Меню</Nav.Link>
                        <Nav.Link as={Link} to="/orders">Заказы</Nav.Link>
                        <Nav.Link as={Link} to="/cart">
                            <div className="d-flex flex-row">Корзина &nbsp;
                                {basketAmount && <div className="bg-success w-auto rounded">{` ${basketAmount} `}</div>}
                            </div>
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {authorizedEmail && <>
                            <Nav.Link as={Link} to="/profile">{authorizedEmail}</Nav.Link>
                            <Button variant='primary' className="ms-2 mb-1" onClick={event => {
                                logout().then(() => {
                                    navigate("/")
                                    setAuthorizedEmail(false)
                                })
                            }
                            }>Log Out</Button>
                        </>}
                        {!authorizedEmail && <>
                            <Nav.Link as={Link} to="/login"><Button variant='primary' className="ms-2 mb-1">Log
                                In</Button></Nav.Link>
                            <Nav.Link as={Link} to="/registration"><Button variant='primary' className="ms-2 mb-1">Sign
                                In</Button></Nav.Link>
                        </>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default NaviBar;