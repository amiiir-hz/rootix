import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useRef } from "react";
import Eye from "public/asset/svg/eye.svg";
import { PrimarySubmitBtn } from "src/shared/components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useSaveUser from "../queries/mutatio";
import { useSnackbar } from "notistack";
import LoadingScreen from "src/shared/components/LoadingScreen";
import { useRouter } from "next/router";

interface IFormInputs {
  email: string;
  password: string;
  password_confirmation: string;
}
interface AboutProps {
  translate: (key: string) => string;
}
const schema = yup.object({
  email: yup.string().required("Enter your email").email("your email is wrong"),
  password: yup
    .string()
    .required("Enter your password")
    .min(8, "password is too short,at least 8 character")
    .matches(/[A-Z]/, "Password requires an uppercase letter"),

  password_confirmation: yup
    .string()
    .required("ReEnter your password")
    .oneOf([yup.ref("password"), null], "Your passwords are not the same"),
});
function Index({ translate }: AboutProps) {
  const [passType, setPassType] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const saveUserMutation = useSaveUser({
    onSuccess: () => {
      console.log("done"),
        enqueueSnackbar("Operation was successful!", {
          variant: "success",
        }),
        router.push("/setup");
    },
  });
  const onSubmit = async (data: IFormInputs) => {
    try {
      // const token = await recaptchaRef.current.executeAsync()
      saveUserMutation.mutate(data);
    } catch (error) {
      // handle validation error
    }
  };

  // const recaptchaRef = useRef<ReCAPTCHA>(null)
  console.log("saveUserMutation.isLoading", saveUserMutation.isLoading);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="sm:mt-[20px] mt-[39px] text-center dark:text-white text-black w-full  mx-auto bg-transparent loginForm"
    >
      <div className=" flex flex-col items-start justify-start w-full mb-[20px]">
        <label className=" flex justify-start w-full mb-[13px] text-[#4A4844] text-[14px] font-medium leading-[14px]">
          {translate("email")}
        </label>
        <div className=" relative w-full ">
          <input
            {...register("email")}
            className={
              errors.email
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A] rounded-[8px] w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] px-[50px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] py-[17px] px-[19px] placeholder:text-[#C4C4C4] text-[14px] font-normal leading-[14px] border-solid border border-[#E0E5F2] rounded-[4px] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px]"
            }
            autoComplete="nope"
            placeholder="yourname@gmail.com"
          />
        </div>
        <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
          {errors.email?.message}
        </p>
      </div>
      <div className=" flex flex-col items-start justify-start w-full mb-[20px]">
        <label className=" flex justify-start w-full mb-[13px] text-[#4A4844] text-[14px] font-medium leading-[14px]">
          {translate("Password")}
        </label>
        <div className=" relative w-full ">
          <input
            {...register("password")}
            type={passType ? "password" : "text"}
            className={
              errors.password
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A] rounded-[8px] w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] px-[50px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] py-[17px] px-[19px] placeholder:text-[#C4C4C4] text-[14px] font-normal leading-[14px] border-solid border border-[#E0E5F2] rounded-[4px] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px]"
            }
            placeholder="Password"
            autoComplete="new-password"
          />
          <div
            className={
              errors.password
                ? "text-[#BA1A1A] absolute right-[18px] top-[50%] translate-y-[-50%]"
                : " text-[#C4C4C4] absolute right-[18px] top-[50%] translate-y-[-50%]"
            }
            onClick={() => setPassType((perv) => !perv)}
          >
            <Eye />
          </div>
        </div>
        <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
          {errors.password?.message}
        </p>
      </div>
      <div className=" flex flex-col items-start justify-start w-full mb-[20px]">
        <label className=" flex justify-start w-full mb-[13px] text-[#4A4844] text-[14px] font-medium leading-[14px]">
          {translate("Password")}
        </label>
        <div className=" relative w-full ">
          <input
            {...register("password_confirmation")}
            type={passType ? "password" : "text"}
            className={
              errors.password_confirmation
                ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A] rounded-[8px] w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] px-[50px] focus:outline-none focus:border-[#BA1A1A] focus:border"
                : "text-[#0b0b0b] py-[17px] px-[19px] placeholder:text-[#C4C4C4] text-[14px] font-normal leading-[14px] border-solid border border-[#E0E5F2] rounded-[4px] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px]"
            }
            placeholder="Password"
            autoComplete="new-password"
          />
          <div
            className={
              errors.password_confirmation
                ? "text-[#BA1A1A] absolute right-[18px] top-[50%] translate-y-[-50%]"
                : " text-[#C4C4C4] absolute right-[18px] top-[50%] translate-y-[-50%]"
            }
            onClick={() => setPassType((perv) => !perv)}
          >
            <Eye />
          </div>
        </div>
        <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
          {errors.password?.message}
        </p>
      </div>
      <PrimarySubmitBtn
        className="font-medium text-[20px] py-[15px] leading-[27px]  mt-[25px] w-full rounded-[4px]"
        disabled={saveUserMutation.isLoading}
      >
        {saveUserMutation.isLoading ? (
          <LoadingScreen />
        ) : (
          <p>{translate("Signup")}</p>
        )}
      </PrimarySubmitBtn>
    </form>
  );
}

export default Index;
