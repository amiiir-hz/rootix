import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import MyThemeContext from "src/shared/context/MyThemeContext";
import Wallet from "public/asset/svg/wallet.svg";
import dynamic from "next/dynamic";
import Firstcharuppercase from "src/shared/components/firstcharuppercase";
const Piechart = dynamic(() => import("src/shared/components/chart/piechart"), {
  ssr: false,
});
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
        <div>
          <div className=" dark:bg-[#111C44] bg-white px-[28px] rounded-[20px] py-[22px] shadow-chartLine overflow-hidden">
            <p className="dark:text-white text-[#2B3674] font-bold text-[14px] leading-[32px] opacity-[0.6]">
              Earning
            </p>
            <div className=" flex items-center justify-between">
              <p className="dark:text-white text-[#2B3674] font-bold text-[24px] leading-[32px]">
                $21.,500.00
              </p>
              <p className="dark:text-white text-[#2B3674] font-bold text-[14px] leading-[32px]">
                12%
              </p>
            </div>
          </div>
          <div style={{ width: "100%", height: 200 }}>
            <p className="dark:text-white text-[#2B3674] font-bold text-[16px] leading-[32px] ">
              Statistic
            </p>
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "rgba(255, 255, 255, 0.4)" }}
                />
                <YAxis tick={{ fill: "rgba(255, 255, 255, 0.4)" }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#9664FF"
                  fill="transparent"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
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
      <div className=" dark:bg-[#111C44] bg-white px-[28px] rounded-[20px] py-[22px] shadow-chartLine overflow-hidden mt-[30px]">
        <p className="dark:text-white text-[#2B3674] font-bold text-[16px] leading-[32px] mb-[35px]">
          Your cryptocurrencies
        </p>
        <div className="grid grid-cols-7 items-start px-[25px]  mb-[27px]">
          {header.map((item, id) => (
            <div className=" flex flex-row items-center justify-self-start cursor-pointer">
              <label className="text-[#666666] dark:text-[#e4e4e4] text-[14px] leading-[14px] font-normal">
                <Firstcharuppercase char={translate(item.title)} />
              </label>
            </div>
          ))}
        </div>
        <div className="bg-white dark:bg-[#111C44] px-[25px] pb-[2px]">
          <div className="relative ">
            {List.map((data, idd) => (
              <div
                key={idd}
                className="grid grid-cols-7 items-center  mb-[25px]"
              >
                <div className=" flex items-center justify-start">
                  <div>{data.img} </div>
                  <div className=" ml-[12px]">
                    <p className="text-[#202020] justify-self-start dark:text-[#e4e4e4] text-[16px]  leading-[28px] font-normal">
                      {" "}
                      {data.name}
                    </p>
                    <p className="text-[#202020] justify-self-start dark:text-[#e4e4e4] text-[12px] leading-[21px] font-normal">
                      {" "}
                      {data.sub}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#202020] justify-self-start dark:text-[#e4e4e4] text-[16px]  leading-[28px] font-normal">
                    {data?.pri}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const wall = [
  { name: "wallet", ico: <Wallet />, des: "USDT deposit", color: "#FA726A" },
];
const data = [
  {
    name: "Page A",
    uv: 200,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 1000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 400,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 1200,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 600,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 1250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 400,
    pv: 4300,
    amt: 2100,
  },
];
const header = [
  { title: "name" },
  { title: "Price" },
  { title: "asset" },
  { title: "" },
  { title: "" },
];
const List = [
  {
    img: <Wallet />,
    name: "Bitcoin",
    sub: "BTC",
    pri: "₹2,509.75",
  },
];
