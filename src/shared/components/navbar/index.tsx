import React, { useContext, useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import AvatarImage from "public/asset/image/Elipse 5.png";
import { useRouter } from "next/router";
import MyThemeContext from "src/shared/context/MyThemeContext";
import { getLocalStorage } from "src/shared/storage/localStorage";
import Sun from "public/asset/svg/sun.svg";
import Moon from "public/asset/svg/moon.svg";
import { useGetUser } from "src/shared/auth/UserProvider";
import Userrole from "src/shared/hooks/userrole";
import { LangContext } from "src/shared/context/LanguageContext";

function Index() {
  const router = useRouter();
  const {
    dispatch: { translate },
  } = useContext(LangContext);
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const user = useGetUser();
  const [role] = Userrole();

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    setTheme((prev) => !prev);
  }, [getLocalStorage("isDarkTheme")]);

  return (
    <>
      <div
        className={`mt-10 mb-8 mx-6 md:flex-row justify-between hidden md:flex`}
      >
        <div className="text-start">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1">
              <li className="inline-flex items-center">
                <a
                  href="./"
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
                    href={`${router.pathname}`}
                    className="ml-1 text-sm font-medium text-[#2B3674] dark:text-gray-300 dark:hover:text-white"
                  >
                    {router.pathname === "/"
                      ? role === "admin"
                        ? "user list"
                        : "dashboard"
                      : router.pathname.split("/")}
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div className="capitalize text-4xl leading-10 tracking-tight text-[#2B3674] dark:text-white mt-[2px]">
            {router.pathname === "/"
              ? role === "admin"
                ? "user list"
                : "dashboard"
              : null}
            {panellist.map(
              (item, id) => `/${item}` === router.pathname && translate(item)
            )}
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
                className="text-[#2B3674] dark:text-white"
                stroke-width="1.4"
              />
              <line
                x1="10.0101"
                y1="11"
                x2="8"
                y2="8.98995"
                stroke="currentColor"
                className="text-[#2B3674] dark:text-white"
                stroke-width="1.4"
                stroke-linecap="round"
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
          {themeCtx?.isDarkTheme ? (
            <div className=" text-[#A3AED0]" onClick={toggleThemeHandler}>
              <Sun />
            </div>
          ) : (
            <div className=" text-[#A3AED0]" onClick={toggleThemeHandler}>
              <Moon />
            </div>
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
    </>
  );
}

export default Index;

const panellist = [
  "authenticationverfication",
  "authenticatelist",
  "withdrawalrequestdetail",
  "depositrequest",
  "withdrawalrequest",
];
