import React from 'react'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout"
import Registration from "./pages/Registration";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import ApiResponse from "./components/ApiResponse";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <>
            <Routes>
                <Route path="/api" element={<ApiResponse/>}/>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Catalog/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="basket" element={<Basket/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
