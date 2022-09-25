import React from "react";
import Image from "next/image";
import log from "public/assets/login.png";
function LoginImage() {
  return (
    <div className=" relative mb-[-5px]">
      <Image src={log} alt="like" className=" h-full "></Image>
      <div className=" absolute left-0 top-0 z-10 h-full  test w-full">
        <div className="bg-no-repeat bg-center bg-cover LoginImage"></div>

        <div className=" absolute bottom-[29px] w-[70%]  left-0 right-0 z-20 mx-auto flex flex-col items-start justify-start">
          <div className="bg-[#FFFFFF4D] backdrop-blur-[5px] mt-[19px] rounded-[10px] mix-blend-normal	pt-[98px] pb-[73px] pl-[51px] pr-[60px] w-full text-left text-white">
            <p className=" text-[30px] font-medium leading-[37px] w-[75%]">
              organic, hand-made fabric made from up-cycled silk
            </p>
            <p className="text-[16px] font-semibold leading-[18px] w-[75%] mt-[22px]">
              supporting himalayan cottage industries since 1991
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginImage;
