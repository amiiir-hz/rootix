import React from "react";
import logo from "public/asset/svg/logo.svg";
import Image from "next/image";
import GoogleIcon from "public/asset/svg/googleIcon.svg";
interface AboutProps {
  translate: (key: string) => string;
}
function RegisterHeader({ translate }: AboutProps) {
  return (
    <>
      <div className=" flex items-center justify-between">
        <div className=" flex items-center justify-start">
          <div className=" w-[78px] h-[78px]">
            <Image
              src={logo}
              alt="ورود"
              className=" w-full h-full justify-self-end "
            ></Image>
          </div>

          <p className="  text-[#F7931E] text-[26px] font-bold leading-[26px]">
            ROOTIX
          </p>
        </div>
      </div>
      <div className=" mt-[30px] flex flex-col justify-start items-start w-[80%] mx-auto">
        <h6 className="text-[#4A4844] text-[30px] font-medium leading-[44px]">
          {translate("Signup")}
        </h6>
        <p className=" mt-[14px] text-[#949494] text-[15px] font-normal leading-[29px]">
          {translate("Enteryourcredentialstocreateyouraccount")}
        </p>
        <div className="bg-white rounded-[16px] w-full mt-[17px] py-[14px] mx-auto flex items-center justify-center cursor-pointer shadow-login">
          <GoogleIcon />
          <p className="text-[#0000008A] text-[20px] leading-[23px] font-medium  ml-[8px]">
            Continue with Google
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterHeader;
