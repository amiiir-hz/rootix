import React from "react";
import Image from "next/image";
import log from "public/asset/image/login.png";
function LoginImage() {
  return (
    <div className=" md:relative md:w-full md:h-full hidden invisible md:visible md:inline-block">
      <Image src={log} alt="like" className=" h-full " layout="fill" />
      <div className=" absolute left-0 top-0 z-10 h-full  test w-full">
        <div className=" absolute bottom-[29px] lg:w-[70%] md:w-[90%]  left-0 right-0 z-20 mx-auto flex flex-col items-start justify-start">
          <div className="bg-[#FFFFFF4D] backdrop-blur-[5px] mt-[19px] rounded-[10px] mix-blend-normal	lg:pt-[98px] lg:pb-[73px] lg:pl-[51px] lg:pr-[60px] md:pt-[18px] md:pb-[13px] md:pl-[11px] md:pr-[10px] w-full text-left text-white">
            <p className=" lg:text-[30px] md:text-[20px] font-medium leading-[37px] lg:w-[75%] md:w-[90%]">
              organic, hand-made fabric made from up-cycled silk
            </p>
            <p className="lg:text-[16px] md:text-[10px] font-semibold leading-[18px] w-[75%] mt-[22px]">
              supporting himalayan cottage industries since 1991
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginImage;
