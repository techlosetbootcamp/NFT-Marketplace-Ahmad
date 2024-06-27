import { Outlet } from "react-router-dom";
import Footer from "../src/components/footer/Footer";
import Navbar from "../src/components/navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
