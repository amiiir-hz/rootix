import React from "react";
import { Text } from "@/context/LanguageContext";
import Image from "next/image";
import User from "public/assets/User.png";
import logo from "public/svg/logo.svg";
import { useRouter } from "next/router";

function ResponsiveHeader() {
  const router = useRouter();

  return (
    <div className="relative text-center mx-auto w-full  ">
      <div className=" absolute bg-[#3B5998] opacity-[0.2] rounded-[50%] min-w-full h-full py-[42%] pl-[60%] pr-[52%] top-[-100%] right-[0%] left-[-10%]"></div>
      <div className=" absolute bg-[#3B5998] opacity-[0.2] rounded-[50%] min-w-full h-full py-[38%]  pl-[43%] pr-[33%] top-[-100%] right-[-60%]"></div>
      <div className="w-full px-[15px] py-[49px]  ">
        <div className=" flex items-center justify-between">
          <div>
            <div className="flex items-center justify-start w-full">
              <p className="text-[#000000] leading-[31px] text-[20px] font-medium text-start mr-[11px]">
                <Text
                  tid={
                    router.pathname === "/signup"
                      ? "createuserprofile"
                      : "LoginAccount"
                  }
                />
              </p>
              <Image src={User} alt="User" className="w-[22px] h-[22px]" />
            </div>
            <p className="text-[#000000] leading-[16px] text-[13px] font-normal text-start ">
              <Text
                tid={
                  router.pathname === "/signup"
                    ? "Welcometorootix "
                    : "Welcomebacktorootix"
                }
              />
            </p>
          </div>

          <div className=" w-[40px] h-[40px]">
            <Image
              src={logo}
              alt="ورود"
              className=" w-full h-full justify-self-end "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveHeader;
