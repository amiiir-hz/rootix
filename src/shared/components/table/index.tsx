import React from "react";
import Firstcharuppercase from "src/shared/components/firstcharuppercase";
import dayjs from "dayjs";
import Filter from "public/asset/svg/filter.svg";
import { SecondaryBtn1 } from "src/shared/components/button";

type Props = {
  translate: (key: string) => string;
  header: {
    title: string;
  }[];
  list: {
    code: number;
    passcode: number;
    name: string;
    email: string;
    status: string;
    joind: dayjs.Dayjs;
  }[];
};

export default function index({ translate, header, list }: Props) {
  const handleClick = (id: number) => {
    console.log("id :>> ", id);
  };
  return (
    <div className="">
      <div className=" grid grid-cols-7 items-center justify-start mb-[40px] gap-x-[12px]  w-full">
        <div className="bg-white text-[14px] leading-[24px] font-normal cursor-pointer flex items-center justify-start dark:shadow-basic  shadow-table dark:bg-[#111C44] rounded-[100px] py-[14px] text-[#202020] px-[25px] dark:text-[#e4e4e4]">
          <div className=" text-[#8B8B8B]">
            <Filter />
          </div>
          <p className="ml-[10.27px]">{translate("Filters")}</p>
        </div>
        {sortheder.map((item, id) => (
          <div
            key={id}
            className="bg-white w-full  text-[14px] leading-[24px] font-normal cursor-pointer flex items-center dark:shadow-basic justify-start  shadow-table dark:bg-[#111C44] rounded-[100px] py-[14px] text-[#202020]  px-[25px] dark:text-[#e4e4e4]"
          >
            <Firstcharuppercase char={translate(item)} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 items-start px-[25px]  mb-[27px]">
        {header.map((item, id) => (
          <div className=" flex flex-row items-center justify-self-start cursor-pointer">
            <label className="text-[#666666] dark:text-[#e4e4e4] text-[14px] leading-[14px] font-normal">
              {" "}
              <Firstcharuppercase char={translate(item.title)} />
            </label>
          </div>
        ))}
      </div>
      <div className="bg-white dark:shadow-basic  shadow-table dark:bg-[#111C44] px-[25px] pt-[27px] pb-[2px]">
        <div className="relative ">
          {list.map((data, idd) => (
            <div key={idd} className="grid grid-cols-7 items-center  mb-[25px]">
              <p className="text-[#202020] justify-self-start dark:text-[#e4e4e4] text-[14px] leading-[14px] font-normal">
                {" "}
                {data.code}
              </p>
              <p className="text-[#202020] justify-self-start dark:text-[#e4e4e4] text-[14px] leading-[14px] font-normal">
                {" "}
                {data.name}
              </p>
              <p className="text-[#202020] justify-self-start dark:text-[#e4e4e4] text-[14px] leading-[14px] font-normal">
                {" "}
                {data.email}
              </p>
              <p className="text-[#202020] justify-self-start dark:text-[#e4e4e4] text-[14px] leading-[14px] font-normal">
                {" "}
                {data.passcode}
              </p>
              <p className="text-[#202020] justify-self-start dark:text-[#e4e4e4] text-[14px] leading-[14px] font-normal">
                {" "}
                {data.status}
              </p>
              <p className="text-[#202020] justify-self-start dark:text-[#e4e4e4] text-[14px] leading-[14px] font-normal flex flex-col items-start justify-start">
                {dayjs(data.joind).format("DD/MM/YYYY")}
                <span className="mt-[8px] text-[#B2AEAE] dark:text-[#8B8B8B] text-[12px] leading-[14px]">
                  {dayjs(data.joind).format("h:mm A")}
                </span>
              </p>
              <SecondaryBtn1
                className="text-[14px] leading-[19px] font-normal py-[6px] "
                type="button"
                disabled={false}
                onClick={() => handleClick(idd)}
              >
                <Firstcharuppercase char={translate("show")} />
              </SecondaryBtn1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const sortheder = [
  "usercode",
  "name",
  "email",
  "passportcode",
  "status",
  "date",
];
