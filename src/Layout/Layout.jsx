import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Layout = () => {
    return (
        <div>
          <Header></Header>
            <Outlet></Outlet>
            <Footer ></Footer>
        </div>
    );
};

export default Layout;