import React from "react";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import LoginImage from "../AuthImage";
import { Text } from "@/context/LanguageContext";

function Index() {
  return (
    <div className="grid grid-cols-[0.9fr_1fr]">
      <LoginImage />
      <div className="px-[50px] pt-[42px]   mx-auto w-full overflow-auto h-full">
        <LoginHeader />
        <div className="w-[80%] mx-auto">
          <div className="flex items-center  justify-center mx-auto mt-[24px] ">
            <div className="h-[1.5px] flex-1 bg-[#E6E6E6]"></div>
            <h2 className="px-[31px] text-[#C4C4C4] text-[13px]  font-normal">
              or
            </h2>
            <div className="h-[1.5px] flex-1 bg-[#E6E6E6]"></div>
          </div>
          <LoginForm />
          <p className=" mt-[24px] text-[#4A4844] text-left text-[17px] leading-[23px] font-medium">
            <Text tid="Notamember?" />
            <span className="text-[#5177FD] ml-[3px]">
              <Text tid="Signup" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
