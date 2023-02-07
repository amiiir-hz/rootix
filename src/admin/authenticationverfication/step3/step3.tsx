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

type Props = {};
interface IFormInputs {
  name: string;
  iDcode: string;
  postalcode: string;
  landlinenumber: string;
  address: string;
  city: string;
  gender: string;
  birthday: Date;
}
interface AboutProps {
  translate: (key: string) => string;
}
const schema = yup.object({
  name: yup.string().required("Enter your name"),
  iDcode: yup.string().required("Enter your iD code"),
  postalcode: yup.string().required("Enter your postal code"),
  landlinenumber: yup.string().required("Enter your landline number"),
  address: yup.string().required("Enter your address "),
  city: yup.string().required("Enter your city "),
  gender: yup.string().required("Select your gender "),
  birthday: yup.string().required("Enter your birthday"),
});
function Step3({ translate }: AboutProps) {
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
            <Firstcharuppercase char={translate("step3")} />
          </span>{" "}
          :
          <span>
            <Firstcharuppercase char={translate("Completion")} />
          </span>
          <span>
            <Firstcharuppercase char={translate("of")} />
          </span>
          <span>
            <Firstcharuppercase char={translate("specifications")} />
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
      <div className=" w-[60%] grid grid-cols-2 gap-x-[15px] items-center justify-start">
        <div className=" flex flex-col items-start justify-start w-full mt-[23px] ">
          <input
            {...register("name")}
            className={
              errors.name
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="phone number"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.name?.message}
          </p>
        </div>
        <div className=" lex flex-col items-start justify-start w-full mt-[23px]">
          <input
            {...register("birthday")}
            type="date"
            id="date"
            className={
              errors.birthday
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="birthday"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.birthday?.message}
          </p>
        </div>
        <div className=" flex flex-col items-start justify-start w-full mt-[16px] ">
          <input
            {...register("iDcode")}
            className={
              errors.iDcode
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="iD code"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.iDcode?.message}
          </p>
        </div>
        <div className=" flex flex-col items-start justify-start w-full mt-[16px] ">
          <input
            {...register("postalcode")}
            className={
              errors.postalcode
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="postal code"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.postalcode?.message}
          </p>
        </div>
        <div className=" flex flex-col items-start justify-start w-full mt-[16px] ">
          <input
            {...register("landlinenumber")}
            className={
              errors.landlinenumber
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="landline number"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.landlinenumber?.message}
          </p>
        </div>
        <div className=" flex flex-col items-start justify-start w-full mt-[16px] ">
          <input
            {...register("city")}
            className={
              errors.city
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="city"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.city?.message}
          </p>
        </div>
      </div>
      <div className="w-[60%]">
        <div className=" flex w-full flex-col items-start justify-start w-full mt-[16px] ">
          <textarea
            {...register("address")}
            className={
              errors.address
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] resize-none text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] dark:text-white bg-transparent py-[13px] resize-none px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px]"
            }
            autoComplete="nope"
            placeholder="address"
          />
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.address?.message}
          </p>
        </div>
      </div>
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
              gender
            </option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
            {errors.gender?.message}
          </p>
        </div>
      </div>
    </form>
  );
}

export default Step3;
