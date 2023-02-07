import React from "react";
import dynamic from "next/dynamic";
const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);
type Props = {
  theme: boolean | undefined;
};

function Salesstats({ theme }: Props) {
  return (
    <div>
      <div className=" flex items-start justify-start ">
        <div className=" w-[70%]">
          <AdvancedRealTimeChart
            theme={theme ? "dark" : "light"}
            autosize
            hide_top_toolbar
            hide_side_toolbar
            hide_legend
            height={"100%"}
            width="100%"
            symbol="USDT.D
    "
            interval="D"
          ></AdvancedRealTimeChart>
        </div>
        <div className="text-end w-[30%]">
          <p className=" dark:text-white text-[#2B3674] font-bold text-[15px] leading-[36px]">
            Sales Stats
          </p>
          <p className=" mt-[2px] dark:text-white text-[#2B3674] text-[14px] leading-[17px]">
            Last 6 Months
          </p>
        </div>
      </div>
    </div>
  );
}

export default Salesstats;
