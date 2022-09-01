import React from "react";
import { useForm } from "react-hook-form";
import DangerCircle from "@assets/svg/DangerCircle";
import { Text } from "@context/LanguageContext";
import Inputs from "@components/commen/Input/Inputs";
import { BtnSecondary } from "@components/commen/Button";
import { fetchData } from "@components/fetchData/fetchdata";

function DisactiveModal({ data }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (item) => {
    fetchData(
      "setting/status-google-authenticator",
      {
        secret: data?.registration_data?.google2fa_secret,
        type: "deactivate",
        one_time_password: item.one_time_password,
      },
      "POST"
    );
  };
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
            name="one_time_password"
            control={control}
            placeholder=""
            label={<Text tid="GoogleAuthenticatorcode" />}
            className="border-none  w-[50%] dark:bg-white bg-[#D1D3D9]  dark:placeholder-black  placeholder-white text-[14px] px-[12px] py-[5px] rounded-[2px] "
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
