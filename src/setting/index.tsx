import React from "react";
import Tik from "public/asset/svg/tik.svg";
import Accordion from "src/shared/components/accordion";
type Props = {};

export default function index({ translate }: AboutProps) {
  return (
    <div className=" w-full">
      <div className=" grid w-full md:w-[70%] md:grid-cols-[0.8fr_1fr] grid-cols-[0.8fr_1fr]  md:gap-x-[41px] gap-x-[0px] gap-y-[20px] items-center justify-start dark:text-white text-black opacity-80 dark:opacity-100  mb-[40px] ">
        <p className=" md:text-[20px] text-[15px] font-medium leading-[23px] break-words">
          {translate("AccountName")}
        </p>
        <p className=" md:text-[18px] text-[12px] font-normal leading-[21px] break-words justify-self-end md:justify-self-start">
          hamed-izadi1325{" "}
        </p>
        <p className=" md:text-[20px] text-[15px] font-medium leading-[23px] break-words">
          Contact Email:
        </p>
        <p className=" md:text-[18px] text-[12px] font-normal leading-[21px] break-words justify-self-end md:justify-self-start">
          hamizadi@gmail.com
        </p>
        <p className=" md:text-[20px] text-[15px] font-medium leading-[23px] break-words">
          athenticate Status:
        </p>
        <p className=" md:text-[18px] text-[12px] font-normal leading-[21px] break-words justify-self-end md:justify-self-start">
          step 3
        </p>
        <p className=" md:text-[20px] text-[15px] font-medium leading-[23px] break-words">
          Security Status:
        </p>
        <p className="  md:text-[18px] text-[12px] font-normal leading-[21px] flex items-center  break-words break-all justify-self-end md:justify-self-start">
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
                {/* <Toggle
                  name="Toggle"
                  control={control}
                  className=" before:bg-[#fff]"
                  classNameswitch="w-[36px] h-[18px] mr-[15px]"
                  classNameparent="h-[18px]"
                />{" "} */}
                <p>{translate(item.text)}</p>
                <p>{translate(item.text)}</p>
                {/* {data?.user?.google_id === null ? (
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
                )} */}
              </div>
              <div className=" flex items-center">
                {/* <Toggle
                  name="Toggle"
                  control={control}
                  classNameswitch="w-[36px] h-[18px] mr-[15px]"
                  classNameparent="h-[18px] opacity-0"
                /> */}
                <p className=" mt-[9px]">
                  {translate("googleauthenticatorinfo")}
                </p>
              </div>
            </div>
          ) : (
            <div className=" flex items-center">
              {/* <Toggle
                name="Toggle"
                control={control}
                className=" before:bg-[#fff]"
                classNameswitch="w-[36px] h-[18px] mr-[15px]"
                classNameparent="h-[18px]"
              />{" "} */}
              <p>{translate(item.text)}</p>
            </div>
          )}

          <div className=" flex items-center mt-[22px]">
            {/* <Toggle
              name="Toggle"
              control={control}
              className=" before:bg-[#fff]"
              classNameswitch="w-[36px] h-[18px] mr-[15px]"
              classNameparent="h-[18px]"
            /> */}

            <p>{translate(item.text1)}</p>
          </div>
        </Accordion>
      ))}
      {/* <Modal show={activemodal} closeModal={handleModal} className=" w-[50%]">
        <ActiveModal close={handleModal} data={data} />
      </Modal> */}
    </div>
  );
}
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
