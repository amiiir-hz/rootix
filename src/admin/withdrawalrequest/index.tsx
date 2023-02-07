import React from "react";
import Firstcharuppercase from "src/shared/components/firstcharuppercase";
import Formdata from "./formdata";
type Props = {};

function index({ translate }: AboutProps) {
  return (
    <div className="bg-white dark:bg-[#111C44] p-[20px] rounded-[10px]">
      <p className=" text-[#2B3674] dark:text-white font-bold text-[24px] leading-[32px]">
        <Firstcharuppercase char={translate("TRX")} />
        <span className="mx-[5px]">
          <Firstcharuppercase char={translate("withdrawal")} />
        </span>
        <span>
          <Firstcharuppercase char={translate("request")} />
        </span>
      </p>
      <Formdata translate={translate} />
    </div>
  );
}

export default index;
