// import Header from "../header";
import Footer from "../footer/footer";
import Header from "../header/header";
import Dashboard from "../dashboard/dashboard";
import useDarkMode from "../../hooks/useDarkMode";
import { useEffect, useState } from "react";
import HeaderMobile from "../header/headerMobile";
function Layout(props) {

  return (
    <div className="flex flex-col md:flex-row w-100 justify-end">
      <Dashboard/>
      <div className="flex flex-col w-screen md:w-4/5 bg-white md:bg-[#F4F7FE] dark:bg-[#0B1437]">
        <Header/>
        <HeaderMobile/>

        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
