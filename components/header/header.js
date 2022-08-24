import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
// import { connect } from "react-redux";
// import {modeSeloctor} from '../../redux/actions/modeAction'
import AvatarImage from "../../public/assets/Elipse 5.png";
// import AvatarImage from "../../public/assets/Vector (9).png";
// import Nightmode from "../../public/assets/Vector (10).png";
// import Notification from "../../public/assets/Vector (1).svg";
// import SearchIcon from "../../public/assets/icons8-search.svg";
// import SlashIcon from "../../public/assets/slash-icon.svg";
import useDarkMode from "../../hooks/useDarkMode";
// import Head from "next/head";

function Header(props) {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className={`mt-10 mb-8 mx-6 md:flex-row justify-between hidden md:flex`}>
      <div className="text-start">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center lowercase text-sm font-medium text-[#2B3674] dark:text-gray-300 dark:hover:text-white"
              >
                panel
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#2B3674] dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-[#2B3674] dark:text-gray-300 dark:hover:text-white"
                >
                  swap
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div className="capitalize text-4xl leading-10 tracking-tight text-[#2B3674] dark:text-white">
          swap
        </div>
      </div>

      <div
        className={`${styles.header__right_container} bg-white dark:bg-[#111C44] h-16`}
      >
        <div className={styles.header__right_wrapper}>
          <svg
            className={styles.header__right_icon}
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="5"
              cy="5"
              r="4.3"
              stroke="currentColor"
              strokeWidth="1.4"
              className="text-[#2B3674] dark:text-white"
            />
            <line
              className="text-[#2B3674] dark:text-white"
              x1="10.0101"
              y1="11"
              x2="8"
              y2="8.98995"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              st
            />
          </svg>
          <input
            className={`bg-[#F4F7FE] text-[#a3aed0] dark:text-white  dark:bg-[#0B1437] ${styles.header__right_input}`}
            placeholder="search"
          ></input>
        </div>
        <svg
          className="w-6 h-6 text-[#a3aed0] dark:text-white"
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2901 15.29L14.0001 14V9C14.0001 5.93 12.3601 3.36 9.50005 2.68V2C9.50005 1.17 8.83005 0.5 8.00005 0.5C7.17005 0.5 6.50005 1.17 6.50005 2V2.68C3.63005 3.36 2.00005 5.92 2.00005 9V14L0.710051 15.29C0.0800515 15.92 0.520051 17 1.41005 17H14.5801C15.4801 17 15.9201 15.92 15.2901 15.29ZM12.0001 15H4.00005V9C4.00005 6.52 5.51005 4.5 8.00005 4.5C10.4901 4.5 12.0001 6.52 12.0001 9V15ZM8.00005 20C9.10005 20 10.0001 19.1 10.0001 18H6.00005C6.00005 19.1 6.89005 20 8.00005 20Z"
            fill="currentColor"
          />
        </svg>
        {colorTheme === "light" ? (
          // {props.mode === "light"? (
          <svg
            onClick={() => setTheme("light")}
            // onClick={()=>props.modeSeloctor('light')}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setTheme("dark")}
            // onClick={()=>props.modeSeloctor('dark')}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#a3aed0]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
        <div className=" w-12 h-12">
          <Image
            src={AvatarImage}
            alt="avatar"
            className="rounded-full w-10 h-10"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Header;
