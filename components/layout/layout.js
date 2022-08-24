import Footer from "../footer/footer";
import Header from "../header/header";
import Dashboard from "../dashboard/dashboard";
import useDarkMode from "../../hooks/useDarkMode";
import { useEffect, useState } from "react";
import HeaderMobile from "../header/headerMobile";
function Layout(props) {
  return (
    <div className="flex flex-col md:flex-row w-full justify-end h-full">
      <Dashboard />
      <div className="flex flex-col w-screen md:w-[82%] overflow-auto bg-white md:bg-[#F4F7FE] dark:bg-[#0B1437]">
        <Header />
        <HeaderMobile />

        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
