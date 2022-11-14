import React from "react";
import { Text } from "@/context/LanguageContext";
import Calender from "public/svg/calender.svg";
import dynamic from "next/dynamic";
const RadarCharts = dynamic(() => import("src/share/chart/RadarChart"), {
  ssr: false,
});
const SimpleLineCharts = dynamic(
  () => import("src/share/chart/SimpleLineCharts"),
  {
    ssr: false,
  }
);
function SecondPart() {
  return (
    <div className=" grid grid-cols-[1.5fr_2.5fr] gap-x-[20px] px-[23px] mt-[22px]">
      <div className="dark:bg-[#111C44] bg-white rounded-[20px] py-[11px] px-[24px] shadow-chartLine overflow-hidden flex items-start justify-between">
        <RadarCharts data={data} />
        <div>
          <p className="text-[18px] leading-[21px] mb-[2px] dark:text-[#fff] text-[#161616] font-normal">
            <Text tid="SalesStats" />
          </p>
          <p className="text-[14px] leading-[17px] mb-[13px] dark:text-[#fff] text-[#606060] font-light">
            <Text tid="Last6Months" />
          </p>
          <div className=" flex items-center justify-center">
            <div className=" w-[11px] h-[11px] bg-[#7E66FA] rounded-[50%]"></div>
            <p className="text-[12px] leading-[14px] ml-[10px] dark:text-[#fff] text-[#606060] font-light">
              <Text tid={"buy"} />
            </p>
            <div className=" w-[11px] h-[11px] bg-[#20D5CE] ml-[10px] rounded-[50%]"></div>
            <p className="text-[12px] leading-[14px] ml-[10px] dark:text-[#fff] text-[#606060] font-light">
              <Text tid={"Sales"} />
            </p>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#111C44] bg-white rounded-[20px] pt-[8px] shadow-chartLine overflow-hidden px-[39px] py-[14px]">
        <div className=" flex items-center justify-between">
          <div className=" dark:text-white text-[#A3AED0] pt-[10.5px] pb-[7.75px] pr-[23px] pl-[13.5px] dark:bg-[#0C1537] bg-[#F4F7FE] flex items-center justify-center rounded-[7px]">
            <Calender />
            <p className="ml-[19.5px]">
              <Text tid={"mounth"} />
            </p>
          </div>
          <p className=" text-[15px] leading-[36px] font-bold test-[#2B3674] dark:text-white ">
            <Text tid={"market"} />
          </p>
        </div>
        <div className=" mt-[25px] flex items-start justify-between">
          <SimpleLineCharts data={dataLineChart} />
        </div>
      </div>
    </div>
  );
}

export default SecondPart;
const data = [
  {
    subject: "Jan",
    A: 20,
    B: 10,
    fullMark: 90,
  },
  {
    subject: "Fab",
    A: 28,
    B: 30,
    fullMark: 90,
  },
  {
    subject: "Mar",
    A: 46,
    B: 30,
    fullMark: 90,
  },
  {
    subject: "Apr",
    A: 19,
    B: 10,
    fullMark: 90,
  },
  {
    subject: "May",
    A: 45,
    B: 30,
    fullMark: 90,
  },
  {
    subject: "Jun",
    A: 45,
    B: 35,
    fullMark: 90,
  },
];
const dataLineChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
