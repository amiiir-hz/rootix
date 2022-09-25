import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Password from "src/share/Input/Password";
import Inputs from "src/share/Input/Inputs";
import CheckBox from "src/share/Input/CheckBox";
import { Text } from "@/context/LanguageContext";
import ReCAPTCHA from "react-google-recaptcha";
import { BtnPrimarylight } from "src/share/Button";
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

  const onSubmit = (item) => {
    console.log("item :>> ", item);
  };
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
        type="text"
        name="email"
        control={control}
        placeholder="mail@simmmple.com"
        label={<Text tid="email" />}
        classNamedir="flex justify-start w-full mb-[13px] text-[#4A4844] text-[14px] font-medium leading-[14px]"
        className="text-[#C4C4C4] py-[17px] px-[19px] placeholder:text-[#C4C4C4] text-[14px] font-normal leading-[14px] border-solid border border-[#E0E5F2] rounded-[4px] w-full "
      />
      <Password
        label={<Text tid="Password" />}
        message="رمز عبور را وارد کنید"
        name="password"
        login={false}
        control={control}
        placeholder="Min. 8 characters"
        full="mt-[14px]"
        classes="text-[#C4C4C4] py-[17px] px-[19px] placeholder:text-[#C4C4C4] text-[14px] font-normal leading-[14px] "
      />

      <div className=" flex items-start justify-between mt-[13px]">
        <CheckBox
          name="Keepmesignedin"
          control={control}
          label={<Text tid="Keepmesignedin" />}
          classNamedir=" text-[#4A4844] text-[16px] font-medium leading-[22px]"
          className=" w-[20px] h-[20px] mr-[9px]"
        />
        {/* <CheckBox
          label={<Text tid="Keepmesignedin " />}
          control={control}
          register={{
            required: {
              value: true,
              message: "Enter email",
            },
          }}
        /> */}
        <div>
          <ReCAPTCHA sitekey="YOUR-SITE-KEY" onChange={onChange} />
        </div>
      </div>
      <BtnPrimarylight
        className="font-bold text-[20px] py-[15px] leading-[27px]  mt-[25px] w-full rounded-[4px]"
        type={"submit"}
      >
        <Text tid="login" />
      </BtnPrimarylight>
    </form>
  );
}

export default LoginForm;
