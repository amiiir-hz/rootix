import React from "react";
import Check from "public/asset/svg/check.svg";
type Props = {};

function Usertimeline() {
  return (
    <div >
      <div className=" flex items-center justify-start mb-[27px]">
        <p className="dark:text-white text-[#2B3674] font-bold text-[16px] leading-[32px]">
        user time line
        </p>
    
      </div>
      {wall.map((item, id) => (
        <div className=" flex items-center justify-between" key={id}>
          <div className="flex items-center justify-start">
            <div
              className={` text-white mr-[16px] bg-[#28C76F] px-[12px] py-[14px] rounded-[50%]`}
            >
              {item.ico}
            </div>
            <div className=" text-start">
              <p className="dark:text-white text-[#2B3674] font-normal text-[14px] leading-[18px]">
                {item?.name}
              </p>
              <p className="dark:text-white text-[#2B3674] font-normal text-[12px] leading-[14px] mt-[4px]">
                {item?.des}
              </p>
              <p className="dark:text-white text-[#2B3674] font-light text-[12px] leading-[14px]  mt-[4px]">
                {item?.time}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Usertimeline;
const wall = [
  { name: "register", ico: <Check />, des: "your registration has completed", time: "25 mins ago" },
];
