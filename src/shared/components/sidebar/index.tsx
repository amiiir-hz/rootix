import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "public/asset/image/logorootix [Recovered]-0۲ 1.png";
import Home from "public/asset/svg/home.svg";
import Swap from "public/asset/svg/swap.svg";
import Trade from "public/asset/svg/trade.svg";
import List from "public/asset/svg/list.svg";
import Banks from "public/asset/svg/banks.svg";
import Ticket from "public/asset/svg/ticket.svg";
import Setting from "public/asset/svg/setting.svg";
import { useRouter } from "next/router";
import Userrole from "src/shared/hooks/userrole";

type List = {
  name: string;
  ico: any;
};

function Sidebar({ translate }: AboutProps) {
  const router = useRouter();
  const [list, setList] = useState<List[]>();
  const [role] = Userrole();

  useEffect(() => {
    if (role=== "admin") {
      setList(listadmin);
    } else {
      setList(listuser);
    }
  }, [role]);
  const handleClick = (address: string) => {
    if (address === "Dashboard" || address === "userlist") {
      router.push(`/`);
    } else {
      router.push(`/${address}`);
    }
  };
  return (
    <div
      className={`rounded-3xl md:rounded-none mt-4 md:mt-0 md:w-1/5 w-[95%] left-[8px] bg-white dark:bg-[#111C44] md:h-auto  drop-shadow-2xl md:drop-shadow-none fixed bottom-20 z-10 md:z-0 md:static`}
    >
      <div className="hidden md:block mx-auto w-20 h-20">
        <Image src={Logo} alt="sgh"></Image>
      </div>
      <div className="hidden md:block font-sans text-2xl font-bold text-[#2B3674] dark:text-white uppercase text-center">
        rootix
      </div>
      <hr className="hidden md:block mt-2 text-[#F4F7FE] " />
      <div className=" flex flex-row justify-around  md:flex-col my-3 md:justify-center md:items-start md:mt-4 md:mb-0">
        {list &&
          list.map((item, id) => (
            <div
              className="md:mt-6  flex items-center justify-between w-full md:h-[36px] h-auto"
              key={id}
            >
              <div
                className={
                  "  flex flex-row items-center w-[90%] mx-auto justify-between md:justify-start"
                }
                onClick={() => handleClick(item.name)}
              >
                <div
                  className={
                    (router.pathname === "/" && item.name === "Dashboard") ||
                    router.pathname.replace("/", "") === item.name
                      ? "text-[#4318FF] dark:text-white  md:pl-[31.8px] mx-auto md:mx-0 md:mr-[23.8px] pl-0"
                      : "text-[#A3AED0] dark:text-white  md:pl-[31.8px] mx-auto md:mx-0 md:mr-[23.8px] pl-0"
                  }
                >
                  {" "}
                  {item.ico}
                </div>

                <div
                  className={
                    (router.pathname === "/" && item.name === "Dashboard") ||
                    router.pathname.replace("/", "") === item.name
                      ? "hidden md:block capitalize text-[#2B3674] dark:text-white cursor-pointer font-bold text-[16px] leading-[30px]"
                      : "hidden md:block capitalize text-[#A3AED0] dark:text-white cursor-pointer font-bold text-[16px] leading-[30px]"
                  }
                >
                  {translate(item.name)}
                </div>
              </div>
              {((router.pathname === "/" && item.name === "Dashboard") ||
                router.pathname.replace("/", "") === item.name) && (
                <div className="w-[4px] rounded-[25px] bg-[#7551FF] md:h-full hidden invisible md:visible md:inline-block" />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
export default Sidebar;

const listuser = [
  {
    name: "Dashboard",
    ico: <Home />,
  },
  {
    name: "swap",
    ico: <Swap />,
  },
  {
    name: "trade",
    ico: <Trade />,
  },
  {
    name: "lists",
    ico: <List />,
  },
  {
    name: "banks",
    ico: <Banks />,
  },
  {
    name: "tickets",
    ico: <Ticket />,
  },
  {
    name: "setting",
    ico: <Setting />,
  },
];

const listadmin = [
  {
    name: "userlist",
    ico: <Home />,
  },
  {
    name: "authenticatelist",
    ico: <Swap />,
  },
  {
    name: "trade",
    ico: <Trade />,
  },
  {
    name: "lists",
    ico: <List />,
  },
  {
    name: "banks",
    ico: <Banks />,
  },
  {
    name: "tickets",
    ico: <Ticket />,
  },
  {
    name: "setting",
    ico: <Setting />,
  },
];
