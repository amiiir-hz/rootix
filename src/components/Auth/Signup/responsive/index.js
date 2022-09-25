import React from "react";
import ResponsiveHeader from "../../ResponsiveHeader";
import SignupForm from "../SignupForm";
import HeaderLogo from "public/assets/register.png";
import Image from "next/image";
function index() {
  return (
    <div className="w-full h-full">
      <ResponsiveHeader />
      {/* <Image
        src={HeaderLogo}
        alt="HeaderLogo"
        className=" h-full mx-auto sm:relative sm:top-[45%] mt-[200px] sm:mt-[0]"
      /> */}
      {/* <SignupForm /> */}
      <p> صرافی ارز دیجیتال روتیکس</p>
    </div>
  );
}

export default index;
