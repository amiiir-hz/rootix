import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Password from "@components/commen/Input/Password";
import Inputs from "@components/commen/Input/Inputs";
import { Text } from "@context/LanguageContext";
import ReCAPTCHA from "react-google-recaptcha";
import { BtnPrimarylight } from "@components/commen/Button";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function LoginForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("ایمیل را وارد کنید")
      .email("ایمیل واردشده اشتباه است"),
    password: Yup.string()
      .required("رمز عبور را وارد کنید")
      .min(8, "رمز عبور کوتاه است.حداقل هشت رقم وارد کنید"),
  });
  const formOptions = {
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  };
  const {
    handleSubmit,
    formState: { isValid },
    control,
    reset,
  } = useForm(formOptions);
  useEffect(() => {
    reset({
      password: "",
      email: "",
    });
  }, []);

  const onSubmit = (item) => {};
  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="mt-[20px] text-center dark:text-white text-black w-full  mx-auto bg-transparent loginForm"
    >
      <Inputs
        // register={{
        //   required: {
        //     value: true,
        //     message: "Enter email",
        //   },
        // }}
        type="text"
        name="email"
        control={control}
        placeholder="mail@simmmple.com"
        label={<Text tid="email" />}
        classNamedir="flex justify-start w-full mb-[13px] text-[#2B3674] text-[14px] font-medium leading-[14px]"
        className="text-[#A3AED0] py-[17px] px-[19px] placeholder:text-[#A3AED0] text-[14px] font-normal leading-[14px] border-solid border border-[#E0E5F2] rounded-[16px] w-full "
      />
      <Password
        label={<Text tid="Password" />}
        // register={{
        //   required: {
        //     value: true,
        //     message: "Enter Password",
        //   },
        // }}
        message="رمز عبور را وارد کنید"
        name="password"
        control={control}
        placeholder="Min. 8 characters"
        full="mt-[14px]"
        classes="text-[#A3AED0] py-[17px] px-[19px] placeholder:text-[#A3AED0] text-[14px] font-normal leading-[14px] "
      />
      <div className=" flex items-start justify-between mt-[13px]">
        <div>
          <ReCAPTCHA sitekey="YOUR-SITE-KEY" onChange={onChange} />
        </div>
        <p className=" text-[#4318FF] text-[14px] leading-[20px] font-medium cursor-pointer">
          فراموشی رمز عبور
        </p>
      </div>
      <BtnPrimarylight
        className="font-bold text-[14px] py-[20px]  mt-[25px] w-full"
        type={"submit"}
      >
        <Text tid="confirm" />
      </BtnPrimarylight>
    </form>
  );
}

export default LoginForm;
