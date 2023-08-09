import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
// import Navbar from "../components/Navbar";
import Media from "../components/Media";
import Footer from "../components/Footer";
import Subnav from "../components/SubNav";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Media />
      <Outlet />
      <Footer />
      <Subnav />
    </>
  );
};

export default SharedLayout;
