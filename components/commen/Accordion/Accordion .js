import React from "react";
// import arrow from "../../../Assets/Image/svg/arrowdown.svg";
import { Text } from "@context/LanguageContext";
import TopArrow from "@assets/svg/TopArrow";
function Accordion(props) {
  console.log("first", props.id);
  return (
    <div className={`${props.className} Accordion`} key={props.id}>
      <div className="dark:bg-gradient-to-r dark:from-[#111C44] dark:to-[#29323C] dark:text-white text-black mb-[16px] overflow-hidden rounded-[2px]">
        <div className="collapsible-item">
          <input
            type="checkbox"
            id={`tab-${props.id}`}
            className=" opacity-0 absolute"
          />
          <label
            className="collapsible-item-label text-[18px] leading-[29.88px] cursor-pointer font-medium flex justify-between text-primary-dark pr-[20px] pl-[17px] py-[17px]"
            htmlFor={`tab-${props.id}`}
          >
            <Text tid={props.label} />
            <TopArrow />
            {/* <img src={arrow} alt={arrow} className=" w-[2rem] " /> */}
          </label>
          <div className="collapsible-item-content font-medium text-[14px]  leading-[24px]">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
