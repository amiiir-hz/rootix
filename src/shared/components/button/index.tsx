import React from "react";

type Props = {
  type: "submit" | "button" | "reset";
  disabled: boolean;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element;
};
type Propssubmit = {
  disabled: boolean;
  className: string;
  children: JSX.Element;
};

function PrimaryBtn({ type, onClick, disabled, className, children }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-white  bg-[#050966]  rounded-[8px] focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}

export { PrimaryBtn };
function PrimarySubmitBtn({ disabled, className, children }: Propssubmit) {
  return (
    <button
      type={"submit"}
      disabled={disabled}
      className={` text-white  bg-[#4318FF]  rounded-[16px] focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}

export { PrimarySubmitBtn };
function SecondaryBtn({ type, onClick, disabled, className, children }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-[#5056AA]  bg-white  rounded-[8px] focus:outline-none ${className} `}
    >
      {children}
    </button>
  );
}

export { SecondaryBtn };
function SecondaryBtn1({
  type,
  onClick,
  disabled,
  className,
  children,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-white  bg-[#2B3674] dark:bg-[#11047A]  rounded-[4px] focus:outline-none ${className} `}
    >
      {children}
    </button>
  );
}

export { SecondaryBtn1 };
