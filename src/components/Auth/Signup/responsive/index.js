import React from "react";
import ResponsiveHeader from "../../ResponsiveHeader";
import SignupForm from "../SignupForm";
import HeaderLogo from "public/assets/register.png";
import Image from "next/image";
import { Text } from "@/context/LanguageContext";
import GoogleIcon from "public/svg/GoogleIcon";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };
  return (
    <div className="w-full h-full">
      <ResponsiveHeader />
      <div className=" relative z-10 mt-[-15%] mx-auto text-center">
        <Image
          src={HeaderLogo}
          alt="HeaderLogo"
          className=" h-full mx-auto  "
        />
      </div>

      <p className="text-[#000] text-[50px] leading-[63px] font-medium w-[60%] mx-auto text-center">
        <Text tid={"Rootixexchange"} />
      </p>
      <div className="w-[90%] mx-auto">
        <SignupForm />
      </div>
      <div className="flex items-center  justify-center mx-auto mt-[45px] w-[90%] mx-auto ">
        <div className="h-[1.5px] flex-1 bg-[#E6E6E6]"></div>
        <h2 className="px-[31px] text-[#C4C4C4] text-[13px]  font-normal">
          or
        </h2>
        <div className="h-[1.5px] flex-1 bg-[#E6E6E6]"></div>
      </div>
      <div className="bg-white rounded-[16px] w-[90%] mt-[17px] py-[10px] mx-auto flex items-center justify-center cursor-pointer shadow-login">
        <GoogleIcon />
        <p className="text-[#0000008A] text-[13px] leading-[16px] font-medium  ml-[8px]">
          Continue with Google
        </p>
      </div>
      <p
        className=" mt-[24px] text-[#4A4844] text-center text-[13px] leading-[16px] font-normal mb-[15px] cursor-pointer"
        onClick={handleClick}
      >
        <Text tid="alreadysignedup?" />
        <span className="text-[#5177FD] ml-[3px]">
          <Text tid="Login" />
        </span>
      </p>
    </div>
  );
}

export default Index;
