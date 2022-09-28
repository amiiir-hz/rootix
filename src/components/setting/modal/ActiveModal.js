import React, { useState } from "react";
import { CloseCircleIcon } from "public/svg/CloseCircleIcon";
import { Text } from "@/context/LanguageContext";
import DisactiveModal from "./DisactiveModal";
import { useForm } from "react-hook-form";
import { BtnSecondary } from "src/share/Button";
import Inputs from "src/share/Input/Inputs";
import { fetchData } from "@/src/share/fetchData/fetchdata";
import LoadingSpinner from "src/share/loadingSpinner/loadingSpinner";

var CryptoJS = require("crypto-js");

function ActiveModal({ close, data }) {
  const [load, setLoad] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (item) => {
    setLoad((perv) => !perv);
    fetchData(
      "setting/status-google-authenticator",
      {
        secret: data?.registration_data?.google2fa_secret,
        type: "active",
        one_time_password: item.one_time_password,
      },
      "POST"
    ).finally(setLoad((perv) => !perv));
  };
  return (
    <div className=" relative h-full">
      <button
        onClick={() => close(false)}
        className=" absolute  top-[-20px] right-0"
      >
        <div className=" dark:text-white text-black ">
          <CloseCircleIcon />
        </div>
      </button>
      {data?.user?.google_id === null ? (
        <>
          {" "}
          <h3 className=" text-[18px] leading-[29.88px] text-center font-medium dark:text-white text-primary-dark">
            <Text tid="GoogleAuthenticatorregister" />
          </h3>
          <div className="font-medium text-[14px] leading-[24px] mt-[12px]  text-justify">
            <p>
              <Text tid="personalAuthenticator" /> :
              <span className="mx-[6px]">
                {data?.registration_data.google2fa_secret}
              </span>
              <Text tid="acanpersonalAuthenticator" />
            </p>
          </div>
          <div className=" mt-[20px] text-center flex items-center justify-center">
            <img
              className="card-img-top"
              src={data?.QR_Image}
              alt="Card image cap"
            />
          </div>
          <p className="font-medium text-[14px] leading-[24px] mt-[12px]  text-justify">
            <Text tid="personalAuthenticatorregister" />
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-[20px] text-center dark:text-white text-black"
          >
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
              className="border-none  w-[50%] dark:bg-white dark:text-black bg-[#D1D3D9]  dark:placeholder-black  placeholder-white text-[14px] px-[12px] py-[5px] rounded-[2px] "
            />
            <Inputs
              type="text"
              name="type"
              defaultValue={"active"}
              control={control}
              placeholder=""
              label={""}
              className="border-none h-0 disabled opacity-0  w-[50%] dark:bg-white dark:text-black bg-[#D1D3D9]  dark:placeholder-black  placeholder-white text-[14px] px-[12px] py-[5px] rounded-[2px] "
            />

            <BtnSecondary
              disabled={load}
              className="font-medium text-[14px] py-[5px] px-[33px] mt-[20px]"
              type={"submit"}
            >
              {load ? (
                <LoadingSpinner className={""} size="w-[20px] h-[20px]" />
              ) : (
                <Text tid="confirm" />
              )}
            </BtnSecondary>
          </form>
        </>
      ) : (
        <DisactiveModal data={data} />
      )}
    </div>
  );
}

export default ActiveModal;
