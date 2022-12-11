import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes, useSearchParams} from "react-router-dom";
import BasketPage from "./pages/BasketPage";
import CatalogPage from "./pages/CatalogPage";
import DishPage from "./pages/DishPage";
import Layout from "./components/Layout"
import Login from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderPage from "./pages/OrderPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {

    const [searchParams, setSearchParams] = useSearchParams()
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<CatalogPage searchParams={searchParams}/>}/>
                    <Route path="basket" element={<BasketPage/>}/>
                    <Route path="dish/:id" element={<DishPage/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="catalog" element={<CatalogPage searchParams={searchParams}/>}/>
                    <Route path="order/:id" element={<OrderPage/>}/>
                    <Route path="orders" element={<OrdersPage/>}/>
                    <Route path="profile" element={<ProfilePage/>}/>
                    <Route path="registration" element={<RegistrationPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
