import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import MyThemeContext from "src/shared/context/MyThemeContext";
import Wallet from "public/asset/svg/wallet.svg";
import dynamic from "next/dynamic";
const Piechart = dynamic(() => import("src/shared/components/chart/piechart"), {
  ssr: false,
});

export default function Index({ translate }: AboutProps) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [theme, setTheme] = useState<boolean | undefined>(false);
  useEffect(() => {
    setTheme(themeCtx?.isDarkTheme);
  }, [getLocalStorage("isDarkTheme")]);

  return (
    <div className="h-full overflow-auto">
      <div className=" grid grid-cols-3 gap-x-[24px]">
        <div></div>
        <div className=" dark:bg-[#111C44] bg-white px-[28px] rounded-[20px] py-[22px] shadow-chartLine overflow-hidden">
          <div className=" flex items-center justify-start mb-[27px]">
            <p className="dark:text-white text-[#2B3674] font-bold text-[16px] leading-[32px]">
              Transactions
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
        <div className=" dark:bg-[#111C44] bg-white px-[28px] rounded-[20px] py-[22px] shadow-chartLine overflow-hidden">
          <div className=" flex items-center justify-start mb-[47px]">
            <p className="dark:text-white text-[#2B3674] font-bold text-[16px] leading-[32px]">
              Your cryptocurrencies
            </p>
          </div>
          <div className="h-[227px]">
            <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
}

const wall = [
  { name: "wallet", ico: <Wallet />, des: "USDT deposit", color: "#FA726A" },
];
