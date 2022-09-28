import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import AvatarImage from "public/assets/Elipse 5.png";
import useDarkMode from "src/share/hooks/useDarkMode";
import { useState } from "react";

function HeaderMobile(props) {
  const [colorTheme, setTheme] = useDarkMode();
  const [showSearch, setShowSearch] = useState(false);

  return !showSearch ? (
    <div className="w-full flex flex-row justify-between   md:hidden pl-3 pr-3 mt-2">
      <div className="flex flex-row w-3/5  items-center">
        <div className=" w-12 h-12">
          <Image
            src={AvatarImage}
            alt="avatar"
            className="rounded-full w-10 h-10"
          ></Image>
        </div>
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
      </div>
      <div className={`flex flex-row w-2/6  justify-between items-center`}>
        {/* <div className={styles.header__right_wrapper}> */}
        <button
          type="button"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          <svg
            className="w-6 h-6"
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
              className="text-black dark:text-white"
            />
            <line
              className="text-black dark:text-white"
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
        </button>
        {/* <input
            className={`bg-[#F4F7FE] text-[#a3aed0] dark:text-white  dark:bg-[#0B1437] ${styles.header__right_input}`}
            placeholder="search"
          ></input> */}
        {/* </div> */}
        <svg
          className="w-6 h-6 text-black dark:text-white"
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
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
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
      </div>
    </div>
  ) : (
    <div className="flex flex-col block md:hidden">
      <div className="w-full flex flex-row justify-between   pl-3 pr-3 mt-2">
        <div className="flex flex-row w-3/5  items-center">
          <div className=" w-12 h-12">
            <Image
              src={AvatarImage}
              alt="avatar"
              className="rounded-full w-10 h-10"
            ></Image>
          </div>
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
        </div>
        <div className={`flex flex-row w-2/6  justify-between items-center`}>
          <button
            type="button"
            onClick={() => {
              setShowSearch(!showSearch);
            }}
          >
            <svg
              className="w-6 h-6"
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
                className="text-black dark:text-white"
              />
              <line
                className="text-black dark:text-white"
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
          </button>
     
          <svg
            className="w-6 h-6 text-black dark:text-white"
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
            <svg
              onClick={() => setTheme("light")}
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
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
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
        </div>
      </div>
      <input
        className={`bg-[#F4F7FE] my-3 text-[#a3aed0] dark:text-white  dark:bg-[#0B1437] rounded-3xl w-full h-12 pr-4 text-right capitalize`}
        placeholder="search"
      ></input>
    </div>
  );
}
export default HeaderMobile;
