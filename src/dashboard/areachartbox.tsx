import React from "react";
import Arrowdown from "public/asset/svg/arrowdown.svg";
import Arrowup from "public/asset/svg/arrowup.svg";
import Pic from "public/asset/svg/chartarea.svg";
import dynamic from "next/dynamic";
const LineChart = dynamic(
  () => import("src/shared/components/chart/linechart"),
  {
    ssr: false,
  }
);

type Props = {};

function areachartbox({ translate }: AboutProps) {
  return (
    <div className="grid-cols-4 grid gap-x-[19px] ">
      {ChartBoxInfo.map((item, id) => (
        <div
          key={id}
          className=" dark:bg-[#111C44] bg-white rounded-[20px] pt-[8px] shadow-chartLine overflow-hidden"
        >
          <div className=" flex items-start justify-between px-[22px]">
            <div className="flex items-center justify-start">
              <div
                className={`${item.back} py-[11.67px] px-[12.47px] rounded-[50%] mr-[12.35px]`}
              >
                <Pic className={`${item.ico} `} />
              </div>
              <p className=" dark:text-white text-[#2B3674]">
                {translate(item.title)}{" "}
              </p>
            </div>
            <div className=" text-[17px] leading-[36px] font-normal dark:text-white text-[#2B3674] ">
              {item.datainfo.toLocaleString()}
              <span>$</span>
            </div>
          </div>
          <div className=" text-end px-[22px]">
            <p className="dark:text-white text-[#2B3674] leading-[3.6px] text-[15px] ">
              {translate("mounth")}
              <span className=" mx-[8px]">/</span>
              <span
                className={
                  item.factorPrecent.includes("-")
                    ? "text-[#FF4B26] text-[17px] leading-[36px]"
                    : "text-[#20DC49] text-[17px] leading-[36px]"
                }
              >
                {item.factorPrecent.split(item.factorPrecent[0])}
                <span>
                  {item.factorPrecent.includes("-") ? (
                    <Arrowdown className=" inline-block ml-[10.25px]" />
                  ) : (
                    <Arrowup className=" inline-block ml-[10.25px]" />
                  )}
                </span>
              </span>
            </p>
          </div>
          <div style={{ width: "100%", height: 68 }}>
            <LineChart
              stroke={item.borderColor}
              color={item.color}
              id={id}
              data={item.data}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default areachartbox;
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
    factorPrecent: "-21.9%",
    title: "Circulation",
    num: "460",
    color: "#D1B656",
    borderColor: "#DF944B",
    data: data,
    back: "bg-[#EDE2BA]",
    ico: "text-[#DF944B]",
    datainfo: 50023032,
  },
  {
    factorPrecent: "+21.9%",
    title: "Circulation",
    num: "1236",
    color: "#72DCDA",
    borderColor: "#21D3D0",
    data: data,
    back: "bg-[#D9F6F6]",
    ico: "text-[#21D3D0]",
    datainfo: 50023032,
  },
  {
    factorPrecent: "-21.9%",
    title: "profit",
    num: "120",
    color: "#A7A2FB",
    borderColor: "#004E8F",
    data: data,
    back: "bg-[#CECBFD]",
    ico: "text-[#004E8F]",
    datainfo: 50023032,
  },
  {
    factorPrecent: "-21.9%",
    title: "asset",
    num: "350",
    color: "#F4898A",
    borderColor: "#EB6262",
    data: data,
    back: "bg-[#FBD1D2]",
    ico: "text-[#EB6061]",
    datainfo: 50023032,
  },
];
