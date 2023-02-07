import React from "react";
import Firstcharuppercase from "src/shared/components/firstcharuppercase";
import Chat from "public/asset/svg/chat.svg";
import Qrcodepart from './qrcodepart'

type Props = {};

export default function index({ translate }: AboutProps) {
 
  return (
    <div className="bg-white dark:bg-[#111C44] p-[20px] rounded-[10px]">
      <p className=" text-[#2B3674] dark:text-white font-bold text-[24px] leading-[32px]">
        <Firstcharuppercase char={translate("TRX")} />
        <span className="mx-[5px]">
          <Firstcharuppercase char={translate("deposit")} />
        </span>
        <span>
          <Firstcharuppercase char={translate("request")} />
        </span>
      </p>
      <div className=" mt-[43px] text-black dark:text-white flex items-center justify-start">
        <Chat />
        <p className=" mx-[8px] font-normal text-[14px] leading-[19px]">
          {translate("YourTronbalance")}
        </p>
        <p className=" text-[#6C63FF] text-[14px] leading-[19px] font-bold">
          100 TRX
        </p>
      </div>
      <div className=" mt-[26px] text-black dark:text-white flex items-center justify-start">
        <Chat />
        <p className=" mx-[8px] font-normal text-[14px] leading-[19px]">
          The address of your wallet can be seen in the box below. You can use
          this address to deposit digital currencies to this wallet
        </p>
      </div>
      <div className=" mt-[26px] text-black dark:text-white flex items-center justify-start">
        <Chat />
        <p className=" mx-[8px] font-normal text-[14px] leading-[19px] w-[65%]">
          Transfer network: Specify the transfer network for your currency, the
          address of this wallet can be seen in the box below You can use this
          address to deposit digital currencies to this wallet
        </p>
      </div>
      <Qrcodepart />
     
    </div>
  );
}
