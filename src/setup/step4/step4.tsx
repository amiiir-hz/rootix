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
import { useRouter } from "next/router";

type Props = {};
interface IFormInputs {
  bank: string;
  cardnumber: number;
  accountnumber: number;
  shabanumber: number;
}
interface AboutProps {
  translate: (key: string) => string;
  setStep: (step: number) => void;
}
const schema = yup.object({
  bank: yup.string().required("Enter your bank"),
  cardnumber: yup
    .number()
    .required("Enter your card number")
    .min(11, "your phone number is too short"),
  accountnumber: yup
    .number()
    .required("Enter your card number")
    .min(11, "your phone number is too short"),
  shabanumber: yup
    .number()
    .required("Enter your card number")
    .min(11, "your phone number is too short"),
});
function Step4({ translate, setStep }: AboutProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmit = async (data: IFormInputs) => {
    try {
      console.log("data :>> ", data);
      setStep(4);
      router.push("/");
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
      className=" text-start dark:text-white text-black w-full  mx-auto mt-[20px]"
    >
      <div className=" flex items-center justify-start">
        <h6 className=" dark:text-white text-[#2B3674] font-bold text-[24px] leading-[32px]">
          <Firstcharuppercase char={translate("authentication")} />{" "}
          <span>
            {" "}
            <Firstcharuppercase char={translate("step4")} />
          </span>{" "}
          :
          <span>
            <Firstcharuppercase char={translate("Bank")} />
          </span>
          <span>
            <Firstcharuppercase char={translate("information")} />
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
      <div className=" w-[30%]">
        <div className=" flex flex-col items-start justify-start w-full mt-[23px] ">
          <input
            {...register("bank")}
            className={
              errors.bank
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="bank"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.bank?.message}
          </p>
        </div>
        <div className=" flex flex-col items-start justify-start w-full mt-[16px] ">
          <input
            {...register("cardnumber")}
            className={
              errors.cardnumber
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="card number"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.cardnumber?.message}
          </p>
        </div>
        <div className=" flex flex-col items-start justify-start w-full mt-[16px] ">
          <input
            {...register("accountnumber")}
            className={
              errors.accountnumber
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="account number"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.accountnumber?.message}
          </p>
        </div>
        <div className=" flex flex-col items-start justify-start w-full mt-[16px] ">
          <input
            {...register("shabanumber")}
            className={
              errors.shabanumber
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="shaba number"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.shabanumber?.message}
          </p>
        </div>
      </div>
    </form>
  );
}

export default Step4;
