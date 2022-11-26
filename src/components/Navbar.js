import React from "react";
import {Link} from "react-router-dom";


function Navbar(props){
    return (
        <header>
            <Link to="/">Меню</Link>
            <Link to="/orders">Заказы</Link>
            <Link to="/basket">Корзина</Link>
            <Link to="/profile">Профиль</Link>
        </header>
    )
}


export default Navbar;