import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import MyThemeContext from "src/shared/context/MyThemeContext";
import Calender from "public/asset/svg/calender.svg";
import ArrowUp from "public/asset/svg/emptyarrowup.svg";
import Done from "public/asset/svg/circledone.svg";
import Usertimeline from "./Usertimeline";
import dynamic from "next/dynamic";
const CryptoCurrencyMarket = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.CryptoCurrencyMarket),
  {
    ssr: false,
  }
);
type Props = {};

function Trade({ translate }: AboutProps) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [theme, setTheme] = useState<boolean | undefined>(false);
  useEffect(() => {
    setTheme(themeCtx?.isDarkTheme);
  }, [getLocalStorage("isDarkTheme")]);
  return (
    <div className=" grid grid-cols-[1fr_2fr] gap-x-[20px]">
      <div className=" dark:bg-[#111C44] bg-white px-[24px] rounded-[20px] pt-[8px] shadow-chartLine overflow-hidden">
        <Usertimeline />
      </div>
      <div className=" dark:bg-[#111C44] bg-white rounded-[20px] text-start pt-[8px] px-[40px] shadow-chartLine overflow-hidden">
          <p className=" dark:text-white text-[#2B3674] mb-[27px] font-bold text-[15px] leading-[36px]">
          trade
          </p>
          <CryptoCurrencyMarket
            colorTheme={theme ? "dark" : "light"}
            autosize
            height={"100%"}
            width="100%"
          ></CryptoCurrencyMarket>
      </div>
    </div>
  );
}

export default Trade;
