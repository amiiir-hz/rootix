import React from "react";
import Firstcharuppercase from "src/shared/components/firstcharuppercase";
import type { user } from "./queries/types";
import dayjs from "dayjs";

type Props = {
  data: user | undefined;
  translate: (key: string) => string;
};
function Recentactivity({ data, translate }: Props) {
  return (
    <div className=" w-full  overflow-auto md:overflow-x-hidden">
      <div className="w-full items-center flex justify-between text-start border-b border-solid border-[#313135] pb-[16px] ">
        <div className="text-[#202020] md:w-[25%] w-[60%]  font-light text-start text-[23px] leading-[28px] dark:text-[#e4e4e4]">
          <Firstcharuppercase char={translate("name")} />
        </div>
        <div className="text-[#202020]  md:w-[30%] w-[40%]  font-light text-start text-[23px] leading-[28px] dark:text-[#e4e4e4]">
          <Firstcharuppercase char={translate("Price")} />
        </div>
        <div className="text-[#202020] md:w-[30%] hidden invisible md:visible md:inline-block  font-light text-start text-[23px] leading-[28px] dark:text-[#e4e4e4]">
          <Firstcharuppercase char={translate("exchange")} />
        </div>
        <div className="text-[#202020] md:w-[15%] hidden invisible md:visible md:inline-block font-light text-start text-[23px] leading-[28px] dark:text-[#e4e4e4]">
          <Firstcharuppercase char={translate("time")} />
        </div>
      </div>
      {data?.swap_assets.map((item, id) => (
        <div
          key={id}
          className=" md:w-full w-auto  dark:text-[#e4e4e4] text-[#202020] text-[16px] leading-[19px] font-normal items-center flex justify-between text-start border-b border-solid border-[#313135] py-[27.5px]"
        >
          <div className=" flex items-center md:w-[25%] w-[60%] justify-start">
            <div className=" w-[32px] h-[32px]">
              <img
                src={item?.logo_url}
                className=" h-full w-full"
                alt={`${item?.name}`}
              />
            </div>
            <p className=" ml-[11px] ">{item?.name}</p>
          </div>
          <div className=" md:w-[30%] w-[40%]">{item?.price} </div>
          <div className="md:w-[30%]  hidden invisible md:visible md:inline-block" style={{ color: item?.color }}>
            {item?.amount}{" "}
          </div>
          <div className="md:w-[15%] hidden invisible md:visible md:inline-block">
            {dayjs(item?.created_at).format("DD/MM/YYYY ")}
            <span className=" ml-[3px] ">
              {" "}
              {dayjs(item?.created_at).format(" hh:mm")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recentactivity;
