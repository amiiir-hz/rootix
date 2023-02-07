import React from "react";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
type Props = {};

function index({ translate }: AboutProps) {
  return (
    <div className="bg-white dark:bg-[#111C44] p-[20px] rounded-[10px]">
      <Step1 translate={translate} />
      <Step2 translate={translate} />
      <Step3 translate={translate} />
      <Step4 translate={translate} />
    </div>
  );
}

export default index;
