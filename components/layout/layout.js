import Footer from "../footer/footer";
import Header from "../header/header";
import Dashboard from "../dashboard/dashboard";
import HeaderMobile from "../header/headerMobile";
function Layout(props) {
  return (
    <div className="flex flex-col md:flex-row w-full justify-end">
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
