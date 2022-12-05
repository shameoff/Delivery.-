import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import ApiResponse from "./components/ApiResponse";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";
import Dish from "./pages/Dish";
import Layout from "./components/Layout"
import Login from "./pages/Login";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";
import Orders from "./components/Orders";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";

function App() {
    return (
        <>
            <Routes>
                <Route path="/api" element={<ApiResponse/>}/>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Catalog/>}/>
                    <Route path="basket" element={<Basket/>}/>
                    <Route path="dish/:id" element={<Dish/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="menu" element={<Catalog/>}/>
                    <Route path="order/:id" element={<Order/>}/>
                    <Route path="orders" element={<MyOrders/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
