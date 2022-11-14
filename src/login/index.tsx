import LoginHeader from "./loginHeader";
import LoginImage from "src/register/AuthImage";
import Google from "public/asset/svg/google.svg";
import FaceBook from "public/asset/svg/facebook.svg";
import Appel from "public/asset/svg/appel.svg";
import { useRouter } from "next/router";
import LoginForm from "./form/index";
import Responsive from "src/register/responsive";

interface AboutProps {
  translate: (key: string) => string;
}
export default function Index({ translate }: AboutProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/register");
  };
  return (
    <div className="sm:grid sm:grid-cols-[1fr] md:grid-cols-[0.7fr_1fr] lg:grid-cols-[0.9fr_1fr] w-full h-full">
      <LoginImage />
      <div className="sm:px-[50px] sm:pt-[42px]   sm:mx-auto sm:w-full sm:overflow-auto sm:h-full hidden invisible sm:visible sm:inline-block">
        <LoginHeader translate={translate} />
        <div className="w-[80%] mx-auto">
          <div className="flex items-center  justify-center mx-auto mt-[24px] ">
            <div className="h-[1.5px] flex-1 bg-[#E6E6E6]"></div>
            <h2 className="px-[31px] text-[#C4C4C4] text-[13px]  font-normal">
              or
            </h2>
            <div className="h-[1.5px] flex-1 bg-[#E6E6E6]"></div>
          </div>
          <LoginForm translate={translate} />
          <p
            className=" mt-[24px] text-[#4A4844] text-left text-[17px] leading-[23px] font-medium mb-[15px] cursor-pointer"
            onClick={handleClick}
          >
            {translate("Notamember?")}
            <span className="text-[#5177FD] ml-[3px]">
              {translate("Signup")}
            </span>
          </p>
        </div>
      </div>
      <div className="sm:hidden sm:invisible visible inline-block w-full h-full">
        <Responsive translate={translate} />
      </div>
    </div>
  );
}


