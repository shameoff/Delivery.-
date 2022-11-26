import React from 'react'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout"
import Registration from "./pages/Registration";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Catalog />} />
        <Route path="registration" element={<Registration />} />
        <Route path="basket" element={<Basket />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
