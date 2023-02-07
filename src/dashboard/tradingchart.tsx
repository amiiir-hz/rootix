import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import MyThemeContext from "src/shared/context/MyThemeContext";
import Calender from "public/asset/svg/calender.svg";
import ArrowUp from "public/asset/svg/emptyarrowup.svg";
import Done from "public/asset/svg/circledone.svg";
import Salesstats from './salesstats'
import dynamic from "next/dynamic";
const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);
type Props = {};

function Tradingchart({ translate }: AboutProps) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [theme, setTheme] = useState<boolean | undefined>(false);
  useEffect(() => {
    setTheme(themeCtx?.isDarkTheme);
  }, [getLocalStorage("isDarkTheme")]);
  return (
    <div className=" grid grid-cols-[1fr_2fr] gap-x-[20px]">
      <div className=" dark:bg-[#111C44] bg-white px-[24px] rounded-[20px] pt-[8px] shadow-chartLine overflow-hidden">
        <Salesstats theme={theme} />
      </div>
      <div className=" dark:bg-[#111C44] bg-white rounded-[20px] pt-[8px] px-[40px] shadow-chartLine overflow-hidden">
        <div className=" flex items-start justify-start ">
          <div className=" flex flex-col items-start justify-start w-[25%]">
            <div className=" dark:bg-[#0C1537] text-[#A3AED0] bg-[#F4F7FE] flex items-center justify-center dark:text-white  py-[7px] pr-[33px] pl-[13.5px] rounded-[7px]">
              <Calender />
              <p className="ml-[25.5px]">mounth</p>
            </div>
            <p className=" mt-[25px] font-bold text-[34px] leading-[42px] dark:text-white text-[#2B3674]">
              $37.5K
            </p>
            <div className=" flex items-center justify-between w-[90%]">
              <p className="dark:bg-[#0C1537] text-[#A3AED0] font-bold text-[14px] leading-[24px]">
                Total Spent
              </p>
              <p className=" text-[#05CD99] font-bold text-[12px] leading-[20px] flex items-center justify-start">
                <span>
                  <ArrowUp />
                </span>
                +2.45%
              </p>
            </div>
            <div className=" mt-[23px] flex items-center justify-start">
              <Done />
              <p className="text-[#05CD99] font-bold text-[16px] leading-[28px] ml-[6px]">
                On track
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-end justify-end w-[75%] widgetwidth">
            <p className=" dark:text-white text-[#2B3674] mb-[30px] font-bold text-[15px] leading-[36px]">
              market
            </p>
            <AdvancedRealTimeChart
              theme={theme ? "dark" : "light"}
              autosize
              hide_top_toolbar
              hide_side_toolbar
              hide_legend
              height={"100%"}
              width="100%"
              symbol="BTCSTUSDT"
              interval="D"
            ></AdvancedRealTimeChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tradingchart;
