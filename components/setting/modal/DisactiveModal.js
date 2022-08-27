import React from "react";
import { useForm } from "react-hook-form";
import DangerCircle from "@assets/svg/DangerCircle";
import { Text } from "@context/LanguageContext";
import Inputs from "@components/commen/Input/Inputs";
import { BtnSecondary } from "@components/commen/Button";

function DisactiveModal() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className=" text-[#f30a0a] text-[30px] w-[60px] h-[60px] mx-auto text-center flex items-center justify-center">
        <DangerCircle />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[20px] text-center dark:text-white text-black"
      >
        <Text tid="GoogleAuthenticatordisactive" />
        <div className=" mt-[14px]">
          <Inputs
            register={{
              required: {
                value: true,
                message: "Enter code",
              },
            }}
            type="text"
            name="name"
            control={control}
            placeholder=""
            label={<Text tid="GoogleAuthenticatorcode" />}
            className="border-none  w-[50%] dark:bg-white bg-[#11047A]  dark:placeholder-black  placeholder-white text-[14px] px-[12px] py-[5px] rounded-[2px] "
          />
        </div>
        <BtnSecondary
          className="font-medium text-[14px] py-[5px] px-[33px] mt-[20px]"
          type={"submit"}
        >
          <Text tid="confirm" />
        </BtnSecondary>
      </form>
    </div>
  );
}

export default DisactiveModal;
