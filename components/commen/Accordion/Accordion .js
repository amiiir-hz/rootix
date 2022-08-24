import React from "react";
// import arrow from "../../../Assets/Image/svg/arrowdown.svg";
function Accordion(props) {
  console.log("first", props.id);
  return (
    <div className="Accordion" key={props.id}>
      <div className="dark:bg-gradient-to-r dark:from-[#111C44] dark:to-[#29323C] dark:text-white mb-[16px] overflow-hidden rounded-[2px]">
        <div className="collapsible-item">
          <input
            type="checkbox"
            id={`tab-${props.id}`}
            className=" opacity-0 absolute"
          />
          <label
            className="collapsible-item-label text-[18px] leading-[29.88px] cursor-pointer font-medium flex justify-between text-primary-dark pr-[2.5rem] pl-[2.9rem] py-[1.8rem]"
            for={`tab-${props.id}`}
          >
            {props.label}
            {/* <img src={arrow} alt={arrow} className=" w-[2rem] " /> */}
          </label>
          <div className="collapsible-item-content bg-white-dark font-normal text-[1.8rem] leading-[3.2rem] text-[rgba(33, 33, 33, 0.9)] ">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
