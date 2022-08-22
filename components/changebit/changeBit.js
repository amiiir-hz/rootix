import React from "react";
import BitField from "../bitField/bitField";
// import styles from "./changeBit.module.css";
// import BitLOgo from "../../public/assets/Cryptocurrency.png";
// import ChangeLOgo from "../../public/assets/swap_vert_black_24dp 1.png";
// import Image from "next/image";

function ChangeBit() {
  return (
    <div className="rounded-xl bg-white dark:bg-[#111C44] w-auto py-2.5 px-5 shadow-lg dark:shadow-none">
      <div className="flex flex-row pb-3 justify-between">
        <div className=" text-slate-600 dark:text-[#C4C4C4] capitalize">
          from
        </div>
        <div className=" text-slate-900 dark:text-white ">
          assete: 123456789
        </div>
      </div>
      <BitField />
      {/* <div className="w-8 h-10 my-5 mx-auto ">
        <Image src={ChangeLOgo} alt="avatar"></Image>
      </div> */}
      <svg
      className="w-8 h-10 my-5 mx-auto dark:text-white"
        // width="43"
        // height="42"
        viewBox="0 0 43 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.5 29.7675V17.5H25V29.7675H19.75L26.75 36.75L33.75 29.7675H28.5ZM16.25 5.25L9.25 12.2325H14.5V24.5H18V12.2325H23.25L16.25 5.25Z"
          fill="currentColor"
        />
      </svg>

      <BitField />
      <div className="text-slate-900 dark:text-white mb-3 my-5">
        fee : 123456789
      </div>
      <div className="text-slate-900 dark:text-white">you get : 123456789</div>
      <button
        type="button"
        className="text-middle text-[aliceblue] bg-[#11047A] dark:bg-[#3248F5] w-full h-12 my-4 rounded-xl capitalize mx-auto hover:bg-white hover:text-[#3248F5] hover:border-indigo-200 hover:border hover:duration-500 dark:hover:bg-white dark:hover:text-[#11047A] dark:hover:border-indigo-200 hover:duration-500"
      >
        change
      </button>
    </div>
  );
}
export default ChangeBit;
