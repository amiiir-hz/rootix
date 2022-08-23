// import Header from "../header";
import Footer from "../footer/footer";
import Header from "../header/header";
import Dashboard from "../dashboard/dashboard";
import useDarkMode from "../../hooks/useDarkMode";
import { useEffect, useState } from "react";
function Layout(props) {
  // const [colorTheme, setTheme] = useDarkMode();
  // localStorage.getItem("theme")
  // useEffect(() => {
  //   setTheme('dark');
  // }, []);
  // setTheme(localStorage.getItem("theme"));
  return (
    <div className="flex flex-row w-100 justify-end">
      <Dashboard className="w-1/5" />
      <div className="flex flex-col w-4/5 bg-[#F4F7FE] dark:bg-[#0B1437]">
        <Header />
        <main>{props.children}</main>
        <Footer />
        {/* <button onClick={() => setTheme("light")}>
          ttttttttttttttttttttttttttt
        </button>
        <div>{colorTheme}</div> */}
      </div>
    </div>
  );
}
export default Layout;
