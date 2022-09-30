import React, { useState, useRef, useEffect } from "react";
import Pic from "public/svg/chartarea.svg";
import { Text } from "@/context/LanguageContext";
import dynamic from "next/dynamic";
const LineChart = dynamic(() => import("src/share/chart/LineChart"), {
  ssr: false,
});

function ChartBox() {
  return (
    <div className="grid-cols-4 grid gap-x-[19px] px-[23px]">
      {ChartBoxInfo.map((item, id) => (
        <div
          key={id}
          className=" dark:bg-[#111C44] bg-white rounded-[20px] pt-[8px] shadow-chartLine overflow-hidden"
        >
          <div className=" flex items-center justify-between px-[22px]">
            <div className="flex items-center justify-start">
              <div
                className={`${item.back} py-[11.67px] px-[12.47px] rounded-[50%] mr-[12.35px]`}
              >
                <Pic className={`${item.ico} `} />
              </div>
              <p className=" dark:text-white text-[#2B3674]">{item.title} </p>
            </div>
          </div>
          <div style={{ width: "100%", height: 68 }}>
            <LineChart
              stroke={item.borderColor}
              color={item.color}
              color1={item.color1}
              id={id}
              data={item.data}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChartBox;
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

const ChartBoxInfo = [
  {
    factorPrecent: "+20%",
    title: <Text tid={"Circulation"} />,
    num: "460",
    color: "#D1B656",
    color1: "#111C44",
    borderColor: "#DF944B",
    data: data,
    back: "bg-[#EDE2BA]",
    ico: "text-[#DF944B]",
  },
  {
    factorPrecent: "-10%",
    title: <Text tid={"Circulation"} />,
    num: "1236",
    color: "#72DCDA",
    color1: "#111C44",
    borderColor: "#21D3D0",
    data: data,
    back: "bg-[#D9F6F6]",
    ico: "text-[#21D3D0]",
  },
  {
    factorPrecent: "-10%",
    title: <Text tid={"profit"} />,
    num: "120",
    color: "#A7A2FB",
    color1: "#111C44",
    borderColor: "#004E8F",
    data: data,
    back: "bg-[#CECBFD]",
    ico: "text-[#004E8F]",
  },
  {
    factorPrecent: "+20%",
    title: <Text tid={"asset"} />,
    num: "350",
    color: "#F4898A",
    color1: "#111C44",
    borderColor: "#EB6262",
    data: data,
    back: "bg-[#FBD1D2]",
    ico: "text-[#EB6061]",
  },
];
