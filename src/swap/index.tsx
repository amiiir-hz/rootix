import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import dynamic from "next/dynamic";
import MyThemeContext from "src/shared/context/MyThemeContext";
import Button from "@mui/material/Button";
import Arrow from "public/asset/svg/doublearrow.svg";
const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);
const MarketData = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.MarketData),
  {
    ssr: false,
  }
);

export default function Index({ translate }: AboutProps) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [theme, setTheme] = useState<boolean | undefined>(false);
  useEffect(() => {
    setTheme(themeCtx?.isDarkTheme);
  }, [getLocalStorage("isDarkTheme")]);
  const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3]);
  const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7]);

  console.log("theme :>> ", themeCtx?.isDarkTheme);
  const handleAllRight = () => {
    const r = right;
    setRight(left);
    setLeft(r);
  };
  return (
    <div className="h-full overflow-auto">
      <div className=" grid grid-cols-[3fr_1fr] gap-x-[30px] items-center justify-center">
        <AdvancedRealTimeChart
          theme={theme ? "dark" : "light"}
          autosize
          hide_top_toolbar
          hide_side_toolbar
          hide_legend
          height={"100%"}
          interval="D"
        ></AdvancedRealTimeChart>
        <div className="dark:bg-[#111C44] bg-white rounded-[12px] py-[47px] px-[35px] flex flex-col items-center justify-center">
          <div className=" flex items-center justify-between mb-[8px] w-full">
            <p className=" dark:text-[#C4C4C4] text-[#A3AED0] text-[14px] leading-[24px] font-normal">
              {" "}
              {translate("From")}
            </p>
            <p className="dark:text-white text-[#202020] text-[14px] leading-[24px] font-normal">
              assete: <span>123456789</span>
            </p>
          </div>
          <div>{left[0]}</div>
          <div
            onClick={handleAllRight}
            className=" dark:text-white text-[#202020] mt-[46px] mb-[16px]"
          >
            <Arrow />
          </div>
          <div className=" flex items-center justify-between mb-[8px] w-full">
            <p className=" dark:text-[#C4C4C4] text-[#A3AED0] text-[14px] leading-[24px] font-normal">
              {" "}
              {translate("To")}
            </p>
            <p className="dark:text-white text-[#202020] text-[14px] leading-[24px] font-normal"></p>
          </div>
          <div>{right[0]}</div>
        </div>
      </div>
      <div className="w-full bg-[#313135] h-[0.5px] my-[28px]"></div>
      <div className="dark:bg-[#111C44] w-full bg-white rounded-[12px] pt-[44px] px-[36px] pb-[35px] ">
        <p className=" dark:text-[#E4E4E4] text-[#202020] text-[23px] leading-[28px] font-normal mb-[43px]">
          {translate("RecentActivities")}
        </p>
        <MarketData
          colorTheme={theme ? "dark" : "light"}
          height={400}
        ></MarketData>
      </div>
    </div>
  );
}
