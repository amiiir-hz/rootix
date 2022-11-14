import React, { useContext } from "react";
import DownArrow from "public/asset/svg/downarrow.svg";
import { LangContext } from "src/shared/context/LanguageContext";

type Props = {
  className: string;
  id: number;
  label: string;
  children: React.ReactNode;
};

export default function index({ className, id, label, children }: Props) {
  const {
    dispatch: { translate },
  } = useContext(LangContext);
  return (
    <div className={`${className} Accordion `} key={id}>
      <div className="dark:bg-gradient-to-r dark:from-[#111C44] dark:to-[#29323C]  dark:text-white text-black mb-[16px] overflow-hidden rounded-[2px]">
        <div className="collapsible-item">
          <input
            type="checkbox"
            id={`tab-${id}`}
            className=" opacity-0 absolute"
          />
          <label
            className="collapsible-item-label text-[18px] leading-[29.88px] cursor-pointer font-medium flex justify-between dark:text-white text-primary-dark pr-[20px] pl-[17px] py-[17px]"
            htmlFor={`tab-${id}`}
          >
            {translate(label)}
            <DownArrow />
          </label>
          <div className="collapsible-item-content font-medium text-[14px]  leading-[24px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
