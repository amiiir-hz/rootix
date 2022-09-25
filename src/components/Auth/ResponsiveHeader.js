import React from "react";


function ResponsiveHeader() {
  return (
    <div className="relative text-center mx-auto w-full  ">
      <div className="w-full h-[445px]  text-center mx-auto">
        <div className="w-[445px] h-[445px]  bg-[#3B5998] opacity-[0.2] rounded-[50%] mx-auto absolute right-0 left-0 top-[-50%]"></div>
        <div className="w-[342px] h-[342px]  bg-[#3B5998] opacity-[0.2] rounded-[50%]  absolute right-[-30%] top-[-40%]"></div>
      </div>

    </div>
  );
}

export default ResponsiveHeader;
