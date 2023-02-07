import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Firstcharuppercase from "src/shared/components/firstcharuppercase";
import {
  SecondarySubmitBtn1,
  SecondaryBtn,
} from "src/shared/components/button";
import LoadingScreen from "src/shared/components/LoadingScreen";
import  DragDropFile  from "src/shared/components/DragDropFile";
type Props = {};
interface IFormInputs {
  email: string;
  phonenumber: string;
}
interface AboutProps {
  translate: (key: string) => string;
}
const schema = yup.object({
  email: yup.string().required("Enter your email").email("your email is wrong"),
  phonenumber: yup
    .string()
    .required("Enter your phonenumber")
    .min(11, "your phone number is too short"),
});

function Step2({ translate }: AboutProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: IFormInputs) => {
    try {
      console.log("data :>> ", data);
    } catch (error) {
      // handle validation error
    }
  };
  const saveUserMutation = false;
  const handleClick = () => {
    console.log("obj :>> ");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className=" text-start dark:text-white text-black w-full  mx-auto mt-[20px] "
    >
      <div className=" flex items-center justify-start">
        <h6 className=" dark:text-white text-[#2B3674] font-bold text-[24px] leading-[32px]">
          <Firstcharuppercase char={translate("authentication")} />{" "}
          <span>
            {" "}
            <Firstcharuppercase char={translate("step2")} />
          </span>{" "}
          :
          <span>
            <Firstcharuppercase char={translate("document")} />
          </span>
          <span>
            <Firstcharuppercase char={translate("upload")} />
          </span>
        </h6>

        <div className=" ml-[30px] flex items-center justify-start">
          <SecondarySubmitBtn1
            disabled={false}
            className="rounded-[70px] text-[14px] leading-[19px] px-[30px] py-[9px]"
          >
            {saveUserMutation ? (
              <LoadingScreen />
            ) : (
              <p>{translate("Confirm")}</p>
            )}
          </SecondarySubmitBtn1>
          <SecondaryBtn
            disabled={false}
            className="border-[2px] border-solid border-[#2B3674] rounded-[70px] text-[14px] leading-[19px] px-[30px] py-[6px] ml-[15px]"
            onClick={handleClick}
            type={"button"}
          >
            {saveUserMutation ? (
              <LoadingScreen />
            ) : (
              <p>{translate("Reject")}</p>
            )}
          </SecondaryBtn>
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-x-[15px] h-[202px] mt-[35px]">
        <div>
          <DragDropFile accept="image/*" />
        </div>
        <div>
          <DragDropFile accept="image/*" />
        </div>
        <div>
          <DragDropFile accept="image/*" />
        </div>
        <div>
          <DragDropFile accept="image/*" />
        </div>
      </div>
    </form>
  );
}

export default Step2;
