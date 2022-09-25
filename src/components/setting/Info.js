import React, { useState, useEffect } from "react";
import Tik from "public/svg/Tik";
import Accordion from "src/share/Accordion/Accordion ";
import { Text } from "@/context/LanguageContext";
import Toggle from "src/share/Toggle/Toggle";
import { useForm, Controller } from "react-hook-form";
import { BtnPrimary, BtnRed } from "src/share/Button";
import { Modal } from "src/share/modal/Modal";
import ActiveModal from "./modal/ActiveModal";

function Info({ data }) {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();
  const [activemodal, setActivemodal] = useState(false);
  const handleModal = () => {
    setActivemodal(false);
  };

  // console.log("data :>> ", data?.data);

  return (
    <div className=" w-full">
      <div className=" grid md:grid-cols-[0.8fr_minmax(900px,_1fr)] grid-cols-[0.8fr_minmax(200px,_1fr)] md:gap-x-[41px] gap-x-[0px] gap-y-[20px] items-center dark:text-white text-black opacity-80 dark:opacity-100  mb-[40px] ">
        <p className=" text-[20px] font-medium leading-[23px] break-words">
          <Text tid="AccountName" />
        </p>
        <p className=" text-[18px] font-normal leading-[21px] break-words">
          hamed-izadi1325{" "}
        </p>
        <p className=" text-[20px] font-medium leading-[23px] break-words">
          Contact Email:
        </p>
        <p className=" text-[18px] font-normal leading-[21px] break-words">
          hamizadi@gmail.com
        </p>
        <p className=" text-[20px] font-medium leading-[23px] break-words">
          athenticate Status:
        </p>
        <p className=" text-[18px] font-normal leading-[21px] break-words">step 3</p>
        <p className=" text-[20px] font-medium leading-[23px] break-words" >
          Security Status:
        </p>
        <p className=" w-11/12 text-[18px] font-normal leading-[21px] flex items-center break-words break-all">
          <span className="text-[#35D659] mr-[3px]">
            <Tik />
          </span>{" "}
          Protected by Google Athenticator since 2021-11-20
        </p>
      </div>
      {Acco.map((item, id) => (
        <Accordion
          label={item.title}
          id={id}
          key={id}
          className=" md:w-[50%] w-full dark:shadow-basic shadow-basiclight"
        >
          {id === 1 ? (
            <div>
              {" "}
              <div className=" flex items-center">
                <Toggle
                  name="Toggle"
                  control={control}
                  className=" before:bg-[#fff]"
                  classNameswitch="w-[36px] h-[18px] mr-[15px]"
                  classNameparent="h-[18px]"
                />{" "}
                <p>
                  <Text tid={item.text} />
                </p>
                <p>
                  <Text tid={item.text} />
                </p>
                {data?.user?.google_id === null ? (
                  <BtnPrimary
                    className="font-medium text-[14px] py-[5px] px-[33px] ml-[19px]"
                    onClick={() => setActivemodal(true)}
                  >
                    <Text tid="Active" />
                  </BtnPrimary>
                ) : (
                  <BtnRed
                    className="font-medium text-[14px] py-[5px] px-[33px] ml-[19px]"
                    onClick={() => setActivemodal(true)}
                  >
                    <Text tid="disActive" />
                  </BtnRed>
                )}
              </div>
              <div className=" flex items-center">
                <Toggle
                  name="Toggle"
                  control={control}
                  classNameswitch="w-[36px] h-[18px] mr-[15px]"
                  classNameparent="h-[18px] opacity-0"
                />
                <p className=" mt-[9px]">
                  <Text tid={"googleauthenticatorinfo"} />
                </p>
              </div>
            </div>
          ) : (
            <div className=" flex items-center">
              <Toggle
                name="Toggle"
                control={control}
                className=" before:bg-[#fff]"
                classNameswitch="w-[36px] h-[18px] mr-[15px]"
                classNameparent="h-[18px]"
              />{" "}
              <p>
                <Text tid={item.text} />
              </p>
            </div>
          )}

          <div className=" flex items-center mt-[22px]">
            <Toggle
              name="Toggle"
              control={control}
              className=" before:bg-[#fff]"
              classNameswitch="w-[36px] h-[18px] mr-[15px]"
              classNameparent="h-[18px]"
            />

            <p>
              <Text tid={item.text1} />
            </p>
          </div>
        </Accordion>
      ))}
      <Modal show={activemodal} closeModal={handleModal} className=" w-[50%]">
        <ActiveModal close={handleModal} data={data} />
      </Modal>
    </div>
  );
}

export default Info;

const Acco = [
  {
    title: "Logsandtransactionsnotification",
    text: "Receivnotificationsviaemail",
    text1: "Receivevianotificationsintheapp",
  },
  {
    title: "Twosteplogin",
    text: "googleauthenticator",
    text1: "emailcode",
  },
  {
    title: "Confirmtransactions",
    text: "Verificationwithgoogleauthenticator",
    text1: "Verificationwithemail",
  },
];
