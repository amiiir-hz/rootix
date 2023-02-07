import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Copy from "public/asset/svg/copy.svg";
import UseCopyToClipboard from "src/shared/hooks/UseCopyToClipboard";
import QRcode from "public/asset/image/QRcode.png";
import Image from "next/image";

type Props = {};
interface IFormInputs {
  wallet: string;
  gender: string;
}
const schema = yup.object({
  wallet: yup.string().required("Enter your wallet address "),
  gender: yup.string().required("Select your network "),
});
function Qrcodepart({}: Props) {
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
  const [isCopied, handleCopy] = UseCopyToClipboard(3000);
  const handleClick = () => {
    handleCopy("test");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className=" mt-[41px]"
    >
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
          <div className="form-control">
            <div className="input-group">
              <input
                {...register("wallet")}
                className={
                  errors.wallet
                    ? "border-solid bg-[#FFDAD6] border placeholder:text-[#BA1A1A] text-[#BA1A1A] border-[#BA1A1A]  w-full placeholder:font-medium font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[20px] leading-[20px] py-[16px] rounded-[5px] px-[19px] focus:outline-none focus:border-[#BA1A1A] focus:border rounded-tr-none rounded-br-none"
                    : "text-[#0b0b0b] dark:text-white bg-transparent py-[17px] px-[19px] dark:placeholder:text-white placeholder:text-[#000000] text-[14px] font-normal leading-[14px] border-solid border border-[#ACB1C6] w-full focus:outline-none focus:border-[#2B3184] focus:border-[2px] rounded-[5px] rounded-tr-none rounded-br-none"
                }
                autoComplete="nope"
                placeholder="wallet address"
              />
              <button
                type="button"
                onClick={handleClick}
                className=" bg-[#2B3674] text-white flex items-center justify-center rounded-tl-none rounded-tr-[5px] rounded-br-[5px] rounded-bl-none w-[52px]"
              >
                <Copy />
              </button>
            </div>
            <p className="text-[#BA1A1A] font-medium text-[16px] leading-[12px] mt-[10px]">
              {errors.wallet?.message}
            </p>
          </div>
        </div>
        <div className="relative w-[167px] h-[167px] ml-[39px]">
          <Image src={QRcode} alt="like" className=" h-full " layout="fill" />
        </div>
      </div>
    </form>
  );
}

export default Qrcodepart;
