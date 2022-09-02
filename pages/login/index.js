import React from "react";
import Login from "@components/Auth/Login";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import log from "../../public/svg/login.svg";
import LikeIcon from "../../public/svg/like.svg";
function Index() {
  const size = useWindowSize();
  console.log("size", size);
  return (
    <section
      className={`p-0 bg-[#FFFFFF] h-[100vh] w-full text-right overflow-hidden relative`}
    >
      <Login />
      <div className=" absolute right-0 top-0 z-10 h-full 2xl:w-[40%]  test">
        {size.width > 1536 ? (
          <Image
            src={log}
            alt="ورود"
            className=" w-full h-full justify-self-end "
            layout="fill"
          ></Image>
        ) : (
          <Image
            src={log}
            alt="ورود"
            className=" w-full h-full justify-self-end "
          ></Image>
        )}

        <div className=" absolute bottom-[29px] w-[90%]  left-0 right-0 z-20 mx-auto flex flex-col items-start justify-start">
          <div className=" bg-[#20DC49] flex  items-center rounded-[10px] justify-center py-[14px] px-[13px] text-[#000000] text-[14px] font-normal leading-[17px] ">
            <Image src={LikeIcon} alt="like" className=""></Image>
            <p className="ml-[8px]">صرافی ارز های دیجیتال روتیکس</p>
          </div>
          <div className="bg-[#FFF2F221] backdrop-blur-[100px] mt-[19px] rounded-[10px] mix-blend-normal	py-[14px] px-[37px] w-full text-white text-[15px] font-normal leading-[33px]">
            <p>
              امنیت بالا را با ما تجربه کنید، ولت اختصاصی خود را داشته باشید، با
              کمترین کارمزد کار کنید و با سرعت در بازار های متعدد به معمله
              بپردازید.
            </p>
          </div>
        </div>
      </div>

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
