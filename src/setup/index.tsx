import React, { useState } from "react";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
type Props = {};

function index({ translate }: AboutProps) {
  const [step, setStep] = useState(0);
  return (
    <div className="bg-white dark:bg-[#111C44] p-[20px] rounded-[10px]">
      {step === 0 ? (
        <Step1 translate={translate} setStep={setStep} />
      ) : step === 1 ? (
        <Step2 translate={translate} setStep={setStep} />
      ) : step === 2 ? (
        <Step3 translate={translate} setStep={setStep} />
      ) : step === 3 ? (
        <Step4 translate={translate} setStep={setStep} />
      ) : null}
    </div>
  );
}

export default index;
