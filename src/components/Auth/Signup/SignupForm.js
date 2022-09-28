import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Password from "src/share/Input/Password";
import Inputs from "src/share/Input/Inputs";
import { Text } from "@/context/LanguageContext";
import { BtnPrimarylight } from "src/share/Button";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetchData } from "@/src/share/fetchData/fetchdata";
import LoadingSpinner from "src/share/loadingSpinner/loadingSpinner";

function SignupForm() {
  const [load, setLoad] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Enter your email")
      .email("your email is wrong"),
    password: Yup.string()
      .required("Enter your password")
      .min(8, "password is too short,at least 8 character")
      .test("isValidPass", " Must have One Uppercase", (value, context) => {
        const hasUpperCase = /[A-Z]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 1;
        const conditions = [hasUpperCase];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      }),
    password_confirmation: Yup.string()
      .required("ReEnter your password")
      .oneOf([Yup.ref("password"), null], "Your passwords are not the same"),
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
      email: "",
      password: "",
      password_confirmation: "",
    });
  }, []);

  const onSubmit = (item) => {
    setLoad((perv) => !perv);
    fetchData("register", item, "POST").finally(setLoad((perv) => !perv));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="sm:mt-[20px] mt-[39px] text-center dark:text-white text-black w-full  mx-auto bg-transparent loginForm"
    >
      <Inputs
        type="text"
        name="email"
        control={control}
        placeholder="mail@simmmple.com"
        label={<Text tid="email" />}
        classNamedir="flex justify-start w-full mb-[13px] text-[#4A4844] text-[14px] font-medium leading-[14px]"
        className="text-[#0b0b0b] py-[17px] px-[19px] placeholder:text-[#C4C4C4] text-[14px] font-normal leading-[14px] border-solid border border-[#E0E5F2] rounded-[4px] w-full "
      />
      <Password
        label={<Text tid="Password" />}
        login={false}
        message="رمز عبور را وارد کنید"
        name="password"
        control={control}
        placeholder="Min. 8 characters"
        full="mt-[14px]"
        classes="text-[#0b0b0b] py-[17px] px-[19px] placeholder:text-[#C4C4C4] text-[14px] font-normal leading-[14px] "
      />
      <Password
        label={<Text tid="Password" />}
        login={false}
        message="رمز عبور را وارد کنید"
        name="password_confirmation"
        control={control}
        placeholder="Min. 8 characters"
        full="mt-[14px]"
        classes="text-[#0b0b0b] py-[17px] px-[19px] placeholder:text-[#C4C4C4] text-[14px] font-normal leading-[14px] "
      />

      <BtnPrimarylight
        className="font-bold text-[20px] py-[15px] leading-[27px]  mt-[25px] w-full rounded-[4px]"
        type={"submit"}
        disabled={load}
      >
        {load ? (
          <LoadingSpinner className={""} size="w-[20px] h-[20px]" />
        ) : (
          <Text tid="Signup" />
        )}
      </BtnPrimarylight>
    </form>
  );
}

export default SignupForm;
