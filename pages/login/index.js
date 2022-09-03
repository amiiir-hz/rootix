import React from "react";
import Login from "@components/Auth/Login";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import log from "../../public/svg/login.svg";
function Index() {
  const size = useWindowSize();

  return (
    <section
      className={`p-0 bg-[#E5E5E5] h-[100vh] w-full relative flex items-center justify-start text-right overflow-hidden`}
    >
      <Login />
      <Image
        src={log}
        alt="ورود"
        className=" w-[54%] h-full justify-self-end"
      ></Image>

      {/* <div className="translate-x-[100%]">
        <div className=" translate-x-[-50%]">
          <div className=" translate-x-0">
            <h2>وقتشه که پیشرفت رو شروع کنی...</h2>
            <Image
              src={"/svg/login.png"}
              alt="ورود"
              width={"100%"}
              height={`100%`}
            />
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Index;
