import React, { useState, useEffect, useContext } from "react";
import type { user } from "./queries/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { PrimarySubmitBtn } from "src/shared/components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Arrow from "public/asset/svg/doublearrow.svg";
import { Dropdown } from "semantic-ui-react";
import LoadingScreen from "src/shared/components/LoadingScreen";
import { useSnackbar } from "notistack";
import useswapdataUser from "./queries/mutatio";

type Props = {
  data: user | undefined;
  translate: (key: string) => string;
};

interface IFormInputs {
  source_amount: string;
  source_amount1: string;
}

const schema = yup.object({
  source_amount: yup.string(),
  source_amount1: yup.string(),
});

function Swapselect({ data, translate }: Props) {
  const [friendOptions, setFriendOptions] = useState<any[]>([]);
  const [asset, setAsset] = useState<string>("");
  const [currencysource, setCurrencysource] = useState<string>("");
  const [currencydes, setCurrencydes] = useState<string>("");
  const [left, setLeft] = useState<string>("");
  const [right, setRight] = useState<string>("");
  const { enqueueSnackbar } = useSnackbar();

  const handleAllRight = () => {
    const r = right;
    setRight(left);
    setLeft(r);
  };
  const handleOnChange = (e: React.SyntheticEvent<HTMLElement>, data: any) => {
    setLeft(data.value);
  };
  useEffect(() => {
    if (data) {
      for (let index = 0; index < data?.assets.length; index++) {
        if (left === data?.assets[index]?.name) {
          setAsset(data?.assets[index]?.amount);
          setCurrencysource(data?.assets[index]?.currency);
        }
      }
    }
  }, [left]);
  useEffect(() => {
    if (data) {
      for (let index = 0; index < data?.assets.length; index++) {
        if (right === data?.assets[index]?.name) {
          setCurrencydes(data?.assets[index]?.currency);
        }
      }
    }
  }, [right]);

  const handleOnChange1 = (e: React.SyntheticEvent<HTMLElement>, data: any) => {
    setRight(data?.value);
  };
  useEffect(() => {
    setLeft(data?.assets[0]?.name);
    setRight(data?.assets[0]?.name);
    setAsset(data?.assets[0]?.amount);
    if (data) {
      for (let index = 0; index < data?.assets.length; index++) {
        setFriendOptions((prev) => [
          ...prev,
          {
            key: data?.assets[index]?.name,
            text: data?.assets[index]?.name,
            value: data?.assets[index]?.name,
            image: {
              avatar: data?.assets[index]?.logo_url !== "" ? true : false,
              src: data?.assets[index]?.logo_url,
            },
          },
        ]);
      }
    }
  }, [data]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const SwapdataMutation = useswapdataUser({
    onSuccess: () => {
      console.log("done");
      enqueueSnackbar("Operation was successful!", {
        variant: "success",
      });
    },
  });
  const onSubmit = async (data: IFormInputs) => {
    try {
      SwapdataMutation.mutate({
        source_unit: currencysource,
        des_unit: currencydes,
        source_amount: 10,
      });
    } catch (error) {
      // handle validation error
    }
  };
  return (
    <form
      className="dark:bg-[#111C44] bg-white rounded-[12px] py-[47px] px-[35px] flex flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className=" flex items-center justify-between mb-[8px] w-full">
        <p className=" dark:text-[#C4C4C4] text-[#A3AED0] text-[14px] leading-[24px] font-normal">
          {" "}
          {translate("From")}
        </p>
        <p className="dark:text-white text-[#202020] text-[14px] leading-[24px] font-normal">
          assete: <span>{asset}</span>
        </p>
      </div>
      <div className=" border border-solid border-[#F7F7F787] w-full p-[4px] flex items-center justify-start">
        <Dropdown
          value={left}
          onChange={handleOnChange}
          fluid
          selection
          options={friendOptions}
          className="bg-[#FFFFFF1A] dark:text-white text-[#202020] rounded-[5px] h-[40px] w-[70%]"
        />
        <input
          {...register("source_amount")}
          type={"number"}
          step="0.1"
          defaultValue={"0.0"}
          className={
            "border-none bg-transparent border placeholder:text-[#C4C4C4] focus:outline-none text-[#C4C4C4] w-[30%] placeholder:font-normal font-normal placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[24px]  pl-[8px]"
          }
        />
      </div>
      <div
        onClick={handleAllRight}
        className=" dark:text-white text-[#202020] mt-[46px] mb-[16px]"
      >
        <Arrow />
      </div>
      <div className=" flex items-center justify-between mb-[8px] w-full">
        <p className=" dark:text-[#C4C4C4] text-[#A3AED0] text-[14px] leading-[24px] font-normal">
          {" "}
          {translate("To")}
        </p>
        <p className="dark:text-white text-[#202020] text-[14px] leading-[24px] font-normal"></p>
      </div>
      <div className=" border border-solid border-[#F7F7F787] w-full p-[4px] flex items-center justify-start">
        <Dropdown
          value={right}
          onChange={handleOnChange1}
          fluid
          selection
          options={friendOptions}
          className="bg-[#FFFFFF1A] dark:text-white text-[#202020] rounded-[5px] h-[40px] w-[60%]"
        />
        <input
          {...register("source_amount1")}
          type={"number"}
          step="0.1"
          defaultValue={"0.0"}
          className={
            "border-none bg-transparent border placeholder:text-[#C4C4C4] focus:outline-none text-[#C4C4C4] w-[30%] placeholder:font-normal font-normal placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[24px]  pl-[8px]"
          }
        />
      </div>
      <div className=" text-start w-full">
        <p className="dark:text-white text-[#202020] text-[14px] leading-[24px] font-normal mt-[28px]">
          fee : <span>123456789</span>
        </p>
        <p className="dark:text-white text-[#202020] text-[14px] leading-[24px] font-normal mt-[6px]">
          you get : <span>123456789</span>
        </p>
      </div>

      <PrimarySubmitBtn
        className=" py-[12px]  mt-[29px] w-full rounded-[12px] relative"
        disabled={SwapdataMutation.isLoading}
      >
        {SwapdataMutation.isLoading ? (
          <LoadingScreen />
        ) : (
          <p className="font-normal text-[16px] leading-[24px]">
            {translate("Change")}
          </p>
        )}
      </PrimarySubmitBtn>
    </form>
  );
}

export default Swapselect;
