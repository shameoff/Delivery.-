import {Outlet} from "react-router-dom";
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import {Container} from "react-bootstrap";


function Layout() {
    return (
        <Container className="p-3">
            <NaviBar/>

            <Outlet/>

            <Footer/>
        </Container>
    )
}

export default Layout
