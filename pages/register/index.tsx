import React, { FC, useContext } from "react";
import Register from "src/register";
import { LangContext } from "src/shared/context/LanguageContext";

function index() {
  const {
    dispatch: { translate },
  } = useContext(LangContext);
  return (
    <div
      className={`p-0 bg-[#FFFFFF] h-full w-full text-right overflow-hidden relative flex items-start justify-start`}
    >
      <Register translate={translate} />
    </div>
  );
}

export default index;
