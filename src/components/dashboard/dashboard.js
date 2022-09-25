import React from "react";
// import styles from "./dashboard.module.css";
import Image from "next/image";
import Logo from "../../public/assets/logorootix [Recovered]-0۲ 1.png";
// import HomeLOgo from "../../public/assets/Vector (2).svg";
// import SwapLogo from "../../public/assets/Vector (3).svg";
// import TradeLogo from "../../public/assets/Vector (4).svg";
// import BanksLogo from "../../public/assets/Group 461.svg";
// import TicketLogo from "../../public/assets/Vector (5).svg";
// import ListLogo from "../../public/assets/Vector (6).svg";

function Dashboard(props) {
  return (
    <div
      className={`rounded-3xl md:rounded-none mt-4 md:mt-0 md:w-1/5 w-screen md:h-screen bg-white dark:bg-[#111C44] md:h-auto drop-shadow-2xl md:drop-shadow-none fixed bottom-20 z-10 md:z-0 md:static`}
    >
      <div className="hidden md:block mx-auto w-20 h-20">
        <Image src={Logo} alt="sgh"></Image>
      </div>
      <div className="hidden md:block font-sans text-2xl font-bold text-[#2B3674] dark:text-white uppercase text-center">
        rootix
      </div>
      <hr className="hidden md:block mt-2 text-[#F4F7FE] " />
      <div className=" flex flex-row justify-around md:flex-col my-3 md:justify-center md:items-start md:mt-4 md:mb-0">
        {/* font-weight bold and border right on select */}
        <div className=" md:mt-6 flex flex-row">
          {/* <div className="mx-auto w-5 h-5 mx-7">
            <Image src={HomeLOgo} alt="sgh"></Image>
          </div> */}
          <svg
            // width="20"
            // height="17"
            className="W-5 h-5 mx-auto md:mx-7 text-[#A3AED0] dark:text-white"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.0001 16V11H12.0001V16C12.0001 16.55 12.4501 17 13.0001 17H16.0001C16.5501 17 17.0001 16.55 17.0001 16V8.99997H18.7001C19.1601 8.99997 19.3801 8.42997 19.0301 8.12997L10.6701 0.599971C10.2901 0.259971 9.7101 0.259971 9.3301 0.599971L0.970098 8.12997C0.630098 8.42997 0.840098 8.99997 1.3001 8.99997H3.0001V16C3.0001 16.55 3.4501 17 4.0001 17H7.0001C7.5501 17 8.0001 16.55 8.0001 16Z"
              fill="currentColor"
            />
          </svg>

          <div className="hidden md:block capitalize text-[#A3AED0] dark:text-white cursor-pointer">
            dashboard
          </div>
        </div>
        <div className=" md:mt-6 flex flex-row ">
          <svg
            // width="21"
            // height="20"
            className="W-5 h-5 mx-auto md:mx-7 text-[#A3AED0] dark:text-white"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z"
              fill="currentColor"
            />
          </svg>
          <div className="hidden md:block capitalize text-[#A3AED0] dark:text-white cursor-pointer">
            swap
          </div>
        </div>
        <div className=" md:mt-6 flex flex-row ">
          <svg
            className="W-5 h-5 mx-auto md:mx-7 text-[#A3AED0] dark:text-white"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.46683 5.73337H2.70016C3.5985 5.73337 4.3335 6.46837 4.3335 7.36671V15.5334C4.3335 16.4317 3.5985 17.1667 2.70016 17.1667H2.46683C1.5685 17.1667 0.833496 16.4317 0.833496 15.5334V7.36671C0.833496 6.46837 1.5685 5.73337 2.46683 5.73337ZM9.00016 0.833374C9.8985 0.833374 10.6335 1.56837 10.6335 2.46671V15.5334C10.6335 16.4317 9.8985 17.1667 9.00016 17.1667C8.10183 17.1667 7.36683 16.4317 7.36683 15.5334V2.46671C7.36683 1.56837 8.10183 0.833374 9.00016 0.833374ZM15.5335 10.1667C16.4318 10.1667 17.1668 10.9017 17.1668 11.8V15.5334C17.1668 16.4317 16.4318 17.1667 15.5335 17.1667C14.6352 17.1667 13.9002 16.4317 13.9002 15.5334V11.8C13.9002 10.9017 14.6352 10.1667 15.5335 10.1667Z"
              fill="currentColor"
            />
          </svg>

          <div className="hidden md:block capitalize text-[#A3AED0] dark:text-white cursor-pointer">
            trade
          </div>
        </div>
        <div className=" md:mt-6 flex flex-row ">
          <svg
            className="W-5 h-5 mx-auto md:mx-7 text-[#A3AED0] dark:text-white"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z"
              fill="currentColor"
            />
          </svg>

          <div className="hidden md:block capitalize text-[#A3AED0] dark:text-white cursor-pointer">
            lists
          </div>
        </div>
        <div className=" md:mt-6 flex flex-row ">
          <svg
            className="W-5 h-5 mx-auto md:mx-7 text-[#A3AED0] dark:text-white"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5002 1.33337H3.50016C2.57969 1.33337 1.8335 2.07957 1.8335 3.00004V13C1.8335 13.9205 2.57969 14.6667 3.50016 14.6667H18.5002C19.4206 14.6667 20.1668 13.9205 20.1668 13V3.00004C20.1668 2.07957 19.4206 1.33337 18.5002 1.33337Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.8335 6.33337H20.1668"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="hidden md:block capitalize text-[#A3AED0] dark:text-white cursor-pointer">
            banks
          </div>
        </div>
        <div className=" md:mt-6 flex flex-row ">
          <svg
            className="W-5 h-5 mx-auto md:mx-7 text-[#A3AED0] dark:text-white"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 11.5C16.5 11.942 16.3244 12.366 16.0118 12.6785C15.6993 12.9911 15.2754 13.1667 14.8333 13.1667H4.83333L1.5 16.5V3.16667C1.5 2.72464 1.67559 2.30072 1.98816 1.98816C2.30072 1.67559 2.72464 1.5 3.16667 1.5H14.8333C15.2754 1.5 15.6993 1.67559 16.0118 1.98816C16.3244 2.30072 16.5 2.72464 16.5 3.16667V11.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="hidden md:block capitalize text-[#A3AED0] dark:text-white cursor-pointer">
            tickets
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
