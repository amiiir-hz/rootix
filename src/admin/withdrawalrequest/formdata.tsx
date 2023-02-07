import React from "react";
import Chat from "public/asset/svg/chat.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SecondarySubmitBtn1 } from "src/shared/components/button";
import LoadingScreen from "src/shared/components/LoadingScreen";

interface IFormInputs {
  amount: number;
  gender: string;
  wallet: string;
  fee: string;
}
const schema = yup.object({
  amount: yup.number().required("Enter your wallet "),
  gender: yup.string().required("Select your network "),
  wallet: yup.string().required("Enter your Destination wallet address "),
  fee: yup.string().required("Enter your fee "),
});
type Props = {};

function Formdata({ translate }: AboutProps) {
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
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className=" mt-[23px]"
    >
      <div className="flex flex-col items-start justify-start w-full">
        <div className=" flex items-center justify-start  w-full">
          <div className=" w-[30%] h-full">
            <input
              {...register("amount")}
              type="number"
              className={
                errors.amount
                  ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                  : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
              }
              autoComplete="nope"
              placeholder="amount"
            />
          </div>
          <div className=" ml-[13px] text-black dark:text-white flex items-center justify-start">
            <Chat />
            <p className=" mx-[8px] font-normal text-[14px] leading-[19px]">
              {translate("YourTronbalance")}
            </p>
            <p className=" text-[#6C63FF] text-[14px] leading-[19px] font-bold">
              100 TRX
            </p>
          </div>
        </div>
        <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
          {errors.amount?.message}
        </p>
      </div>

      <div className=" flex items-center justify-start ">
        <div className="w-[30%]">
          <div className=" flex w-full flex-col items-start justify-start  mt-[16px] ">
            <select
              {...register("gender")}
              className={
                errors.gender
                  ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] resize-none text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                  : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] resize-none px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
              }
            >
              <option value="" disabled selected>
                network
              </option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] my-[10px]">
              {errors.gender?.message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <div className=" flex items-center justify-start  w-full">
          <div className=" w-[30%] h-full">
            <input
              {...register("wallet")}
              className={
                errors.wallet
                  ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                  : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
              }
              autoComplete="nope"
              placeholder="Destination wallet address"
            />
          </div>
          <div className=" ml-[13px] text-black dark:text-white flex items-center justify-start">
            <Chat />
            <p className=" mx-[8px] font-normal text-[14px] leading-[19px]">
              Note: Entering an incorrect address may result in the loss of your
              funds.
            </p>
          </div>
        </div>
        <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
          {errors.wallet?.message}
        </p>
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <div className=" flex items-center justify-start  w-full">
          <div className=" w-[30%] h-full">
            <input
              {...register("fee")}
              className={
                errors.fee
                  ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                  : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
              }
              autoComplete="nope"
              placeholder="fee"
            />
          </div>
        </div>
        <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
          {errors.fee?.message}
        </p>
      </div>
      <SecondarySubmitBtn1
        disabled={false}
        className="rounded-[70px] text-[14px] leading-[19px] px-[30px] py-[9px] mt-[30px]"
      >
        {saveUserMutation ? <LoadingScreen /> : <p>{translate("Submit")}</p>}
      </SecondarySubmitBtn1>
    </form>
  );
}

export default Formdata;
