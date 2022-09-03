import React from "react";
import logo from "../../../public/svg/logo.svg";
import Image from "next/image";
import GoogleIcon from "@assets/svg/GoogleIcon";
import LoginForm from "./LoginForm";

function Index() {
  return (
    <div className="px-[50px] pt-[42px] w-[60%] mr-auto overflow-auto h-full">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center justify-start">
          <Image
            src={logo}
            alt="ورود"
            className=" w-full h-full justify-self-end "
          ></Image>
          <p className=" ml-[10px] text-black text-[17px] font-medium leading-[41px]">
            ROOTIX
          </p>
        </div>
        <div className=" flex items-center justify-start">
          <p className="  text-[#20DC49] mr-[12px] text-[13px] font-light leading-[14px] cursor-pointer">
            !ثبت نام کنید
          </p>
          <p className="  text-black text-[13px] font-light leading-[14px]">
            حساب کاربری ندارید؟
          </p>
        </div>
      </div>
      <div className=" mt-[30px] text-center">
        <h6 className="text-black text-[30px] font-medium leading-[44px]">
          به روتیکس خوش آمدید
        </h6>
        <p className=" mt-[14px] text-black text-[15px] font-normal leading-[29px]">
          !وارد حساب کاربری خود شوید
        </p>
        <div className="bg-[#F4F7FE] rounded-[16px] w-[60%] mt-[17px] py-[14px] mx-auto flex items-center justify-center cursor-pointer">
          <GoogleIcon />
          <p className="text-[#2B3674] text-[14px] leading-[20px] font-medium  ml-[8px]">
            Sign in with Google
          </p>
        </div>
      </div>
      <div className="w-[60%] mx-auto">
        <div className="flex items-center  justify-center mx-auto mt-[24px] ">
          <div className="h-[1.5px] flex-1 bg-[#DBDBDB]"></div>
          <h2 className="px-[31px] text-black text-[13px]  font-normal">
            ورود با ایمیل
          </h2>
          <div className="h-[1.5px] flex-1 bg-[#DBDBDB]"></div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Index;
