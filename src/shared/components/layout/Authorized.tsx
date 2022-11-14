import React from "react";
import Sidebar from "src/shared/components/sidebar";
import Navbar from "src/shared/components/navbar";

function Authorized({ children, translate }: AboutPropschiled) {
  return (
    <div className="flex flex-col md:flex-row w-full  justify-end h-[100%] overflow-hidden relative bg-white  dark:bg-[#0B1437]">
      <Sidebar translate={translate} />
      <div className="flex flex-col w-screen md:w-4/5 bg-white md:bg-[#F4F7FE] dark:bg-[#0B1437] overflow-auto ">
        <Navbar />
        {/* <HeaderMobile /> */}

        <main className="w-[95%] mx-auto ">{children}</main>
        <div className=" mb-[103px] mt-[30px] dark:bg-[#0B1437]"></div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Authorized;
