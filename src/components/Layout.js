import {Outlet} from "react-router-dom";
import NaviBar from "./NaviBar";
import Footer from "./Footer";


function Layout() {
    return(
        <>
        <NaviBar />

        <Outlet />

        <Footer />
        </>
    )
}
export default Layout
