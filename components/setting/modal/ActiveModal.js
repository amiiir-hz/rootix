import React, { useState } from "react";
import { CloseCircleIcon } from "@assets/svg/CloseCircleIcon";
import { Text } from "@context/LanguageContext";
import QRCode from "react-qr-code";
import DisactiveModal from "./DisactiveModal";
var CryptoJS = require("crypto-js");

function ActiveModal({ close }) {
  const [active, setActive] = useState(false);
  const [code, setCode] = useState(generate());

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
      {!active ? (
        <>
          {" "}
          <h3 className=" text-[18px] leading-[29.88px] text-center font-medium dark:text-white text-primary-dark">
            <Text tid="GoogleAuthenticatorregister" />
          </h3>
          <div className="font-medium text-[14px] leading-[24px] mt-[12px]  text-justify">
            <p>
              <Text tid="personalAuthenticator" /> :
              <span className="mx-[6px]">lajnxkjas</span>
              <Text tid="acanpersonalAuthenticator" />
            </p>
          </div>
          <div className=" mt-[20px] text-center flex items-center justify-center">
            <QRCode value={code} size="150" />
          </div>
        </>
      ) : (
        <DisactiveModal />
      )}
    </div>
  );
}

export default ActiveModal;
function generate() {
  let strGenerate = "systemtime='" + "'";
  let content = "___VBAR_CONFIG_V1.1.0___{" + strGenerate + "}";
  content = content.replace(/(^\s*)|(\s*$)/g, "");

  var contenthmacmd5 = CryptoJS.HmacMD5(content, "1234567887654321");
  var contenthmacmd5base64 = CryptoJS.enc.Base64.stringify(contenthmacmd5);
  strGenerate = content + "--" + contenthmacmd5base64;

  return strGenerate;
}
