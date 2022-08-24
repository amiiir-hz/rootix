import React from "react";
import Tik from "@components/assets/svg/Tik";
import Accordion from "@components/commen/Accordion/Accordion ";
import { Text } from "@context/LanguageContext";
import Toggle from "@components/commen/Toggle/Toggle";
import { useForm, Controller } from "react-hook-form";

function Info() {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();
  return (
    <div>
      <div className=" grid grid-cols-[200px_minmax(900px,_1fr)] gap-x-[41px] gap-y-[20px] items-center dark:text-white dark:opacity-80 mb-[40px]">
        <p className=" text-[20px] font-medium leading-[23px]">
          <Text tid="AccountName" />
        </p>
        <p className=" text-[18px] font-normal leading-[21px]">
          hamed-izadi1325{" "}
        </p>
        <p className=" text-[20px] font-medium leading-[23px]">
          Contact Email:
        </p>
        <p className=" text-[18px] font-normal leading-[21px]">
          hamizadi@gmail.com
        </p>
        <p className=" text-[20px] font-medium leading-[23px]">
          athenticate Status:
        </p>
        <p className=" text-[18px] font-normal leading-[21px]">step 3</p>
        <p className=" text-[20px] font-medium leading-[23px]">
          Security Status:
        </p>
        <p className=" text-[18px] font-normal leading-[21px] flex items-center">
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
          className=" w-5/12 dark:shadow-basic shadow-basiclight"
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
