import React from 'react'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout"
import Registration from "./pages/Registration";
import Basket from "./pages/Basket";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import ApiResponse from "./components/ApiResponse";
function App() {
  return (
    <>
    <Routes>
      <Route path="/api" element={<ApiResponse />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Root />} />
        <Route path="registration" element={<Registration />} />
        <Route path="basket" element={<Basket />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
