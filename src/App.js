import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout"
import Registration from "./pages/Registration";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import ApiResponse from "./components/ApiResponse";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";
import Dish from "./pages/Dish";
import Order from "./pages/Order";

function App() {
    return (
        <>
            <Routes>
                <Route path="/api" element={<ApiResponse/>}/>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Catalog/>}/>
                    <Route path="basket" element={<Basket/>}/>
                    <Route path="dish/:id" element={<Dish/>}/>
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
