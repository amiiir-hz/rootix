// import Header from "../header";
import Footer from "../footer/footer";
import Header from "../header/header";
import Dashboard from "../dashboard/dashboard";
import useDarkMode from "../../hooks/useDarkMode";
function Layout(props) {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="container flex flex-row w-100 justify-end">
      <Dashboard className="w-1/5"/>
      <div className="flex flex-col w-4/5 bg-[#d9d9d9] dark:bg-[#ob1437]">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
