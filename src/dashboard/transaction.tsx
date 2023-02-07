import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import MyThemeContext from "src/shared/context/MyThemeContext";
import Wallet from "public/asset/svg/wallet.svg";
import dynamic from "next/dynamic";
const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

function Transaction({ translate }: AboutProps) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [theme, setTheme] = useState<boolean | undefined>(false);
  useEffect(() => {
    setTheme(themeCtx?.isDarkTheme);
  }, [getLocalStorage("isDarkTheme")]);
  return (
    <div className=" grid grid-cols-[2fr_1fr] gap-x-[20px]">
      <div className=" dark:bg-[#111C44] bg-white px-[28px] rounded-[20px] py-[22px] shadow-chartLine overflow-hidden">
        <div className=" flex items-start justify-start ">
          <div className=" w-[80%]">
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
          <div className="text-end w-[20%]">
            <p className=" dark:text-white text-[#2B3674] font-bold text-[15px] leading-[36px]">
            income report
            </p>
        
          </div>
        </div>
      </div>
      <div className=" dark:bg-[#111C44] bg-white px-[28px] rounded-[20px] py-[22px] shadow-chartLine overflow-hidden">
        <div className=" flex items-center justify-between mb-[27px]">
          <p className="dark:text-white text-[#2B3674] font-bold text-[16px] leading-[32px]">
            Transactions
          </p>
          <p className="dark:text-white text-[#2B3674] font-bold text-[16px] leading-[32px]">
            more
          </p>
        </div>
        {wall.map((item, id) => (
          <div className=" flex items-center justify-between" key={id}>
            <div className="flex items-center justify-start">
              <div
                className={`rounded-[16px] py-[16px] px-[17px] text-white mr-[16px]`}
                style={{ backgroundColor: item?.color }}
              >
                {item.ico}
              </div>
              <div className=" text-start">
                <p className="dark:text-white text-[#2B3674] font-bold text-[16px] leading-[22px]">
                  {item?.name}
                </p>
                <p className="dark:text-white text-[#2B3674] font-medium text-[12px] leading-[16px] opacity-[0.6] mt-[8px]">
                  {item?.des}
                </p>
              </div>
            </div>
            <p className="dark:text-white text-[#2B3674] font-medium text-[20px] leading-[27px]">
              $20,30
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transaction;

const wall = [
  { name: "wallet", ico: <Wallet />, des: "USDT deposit", color: "#FA726A" },
];
