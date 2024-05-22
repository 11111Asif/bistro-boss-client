import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation()
    console.log(location)
    const onHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {onHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
           {onHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;