import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className=" fixed w-full top-0 z-50">
        <Header />
      </div>
      <div className="relative ">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
