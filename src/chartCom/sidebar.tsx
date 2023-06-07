import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import dynamic from "next/dynamic";
import MyThemeContext from "src/shared/context/MyThemeContext";
import { Dropdown } from "semantic-ui-react";
// import { useSwapUser } from "./queries/querie";
// import type { user } from "./queries/types";
import "semantic-ui-css/semantic.min.css";

export default function Sidebar({ translate }: AboutProps) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [theme, setTheme] = useState<boolean | undefined>(false);
  const [status, setStatus] = useState<string>("buy");
  const [friendOptions, setFriendOptions] = useState<any[]>([]);
  const [BTC, setBTC] = useState<number>(0);

  useEffect(() => {
    setTheme(themeCtx?.isDarkTheme);
  }, [getLocalStorage("isDarkTheme")]);

  return (
    <div className="h-full overflow-auto px-4">
      <div className="flex justify-around items-center mb-[76px]">
        <span className="hidden md:block font-sans text-2xl font-bold text-[#F4AA3B] uppercase">
          BTC/USDT
        </span>
        <Dropdown
          placeholder="Select"
          fluid
          selection
          options={friendOptions}
          className="bg-transparent dark:text-white text-[#202020] text-[16px] w-[90px]"
        />
      </div>
      <div className="w-[340px] flex justify-around font-bold text-[24px] mb-4">
        <span
          className={`${
            status === "buy" ? "text-[#72BF65]" : "text-[#B6B9C0]"
          } cursor-pointer`}
          onClick={() => setStatus("buy")}
        >
          BUY
        </span>
        <span
          className={`${
            status === "sell" ? "text-[#72BF65]" : "text-[#B6B9C0]"
          } cursor-pointer`}
          onClick={() => setStatus("sell")}
        >
          SELL
        </span>
      </div>
      <div className="mb-20">
        <div
          className={`${
            status === "buy" ? "bg-[#72BF65]" : "bg-[#B6B9C0]"
          } h-[2px] w-1/2 inline-block`}
        ></div>
        <div
          className={`${
            status === "sell" ? "bg-[#72BF65]" : "bg-[#B6B9C0]"
          } h-[2px] w-1/2 inline-block`}
        ></div>
      </div>

      {/* inputs */}
      <div>
        <div className="mb-[10px]">
          <label htmlFor="price" className="text-[#8295B2] mb-1">
            Price
          </label>
          <div className="rounded-[22px] overflow-hidden text-white relative">
            <input
              name="price"
              type="number"
              className=" w-full bg-[#373D4C] text-[19px] px-[14px] py-[15px]"
            />
            <span className="absolute right-3 text-xs top-[1.3rem] ">USDT</span>
          </div>
        </div>
        <div>
          <label htmlFor="amount" className="text-[#8295B2] mb-1">
            Amount
          </label>
          <div className="rounded-[22px] overflow-hidden text-white relative">
            <input
              name="amount"
              type="number"
              value={BTC}
              className=" w-full bg-[#373D4C] text-[19px] px-[14px] py-[15px]"
            />
            <span className="absolute right-3 text-xs top-[1.3rem] ">BTC</span>
            <span
              className="absolute right-14 text-[28px] leading-4 top-[1.3rem] cursor-pointer"
              onClick={() => setBTC(BTC - 0.1)}
            >
              -
            </span>
            <span
              className="absolute right-20 text-[28px] leading-4 top-[1.3rem] cursor-pointer"
              onClick={() => setBTC(BTC + 0.1)}
            >
              +
            </span>
          </div>
          <span className="text-[#8295B2] mt-1 text-[12px]">
            From 0,001 to 100 with step 0,001
          </span>
        </div>
      </div>
    </div>
  );
}
