import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { Controller, useController } from "react-hook-form";
import classNames from "classnames";
import EyeIcon from "public/svg/EyeIcon";
import { LanguageContext } from "@/context/LanguageContext";
import { Text } from "@/context/LanguageContext";

const Password = ({
  name,
  value,
  message,
  control,
  register,
  classes,
  full,
  label,
  absolute,
  login,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: register,
    defaultValue: value,
  });
  const [show, setShow] = useState(false);
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  return (
    <div
      className={classNames(
        `form-control w-full flex flex-col items-start justify-start ${full}`,
        {
          input__absolute: absolute,
        }
      )}
    >
      {label ? (
        <label className="flex justify-between items-center w-full mb-[11px]">
          <span className="label-text  text-[#4A4844] text-[14px] font-medium leading-[14px]">
            {label}
          </span>
          {login && (
            <p className=" text-[#5177FD] text-[14px] leading-[20px] font-medium cursor-pointer">
              <Text tid="Forgotpassword" />
            </p>
          )}
        </label>
      ) : null}

      <label className="input-group border-solid border border-[#E5E5E5] rounded-[4px] overflow-hidden">
        <input
          className={classNames(
            userLanguage === "fa"
              ? `input bg-transparent focus:outline-none w-full text-right focus:bg-transparent `
              : `input bg-transparent focus:outline-none w-full text-left focus:bg-transparent `,
            [classes],
            {
              input__error: error,
            }
          )}
          type={show ? "text" : "Password"}
          {...field}
          {...rest}
          autoComplete="new-password"
        />
        <span
          className=" bg-transparent cursor-pointer"
          onClick={() => setShow((perv) => !perv)}
        >
          <EyeIcon />
        </span>
      </label>

      {error && (
        <span className="text-[14px] block mt-1 text-red-600">
          {error.message}
        </span>
      )}
    </div>
  );
};

Password.propTypes = {
  classes: PropTypes.any,
  control: PropTypes.any,
  errors: PropTypes.any,
  label: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.any,
  value: PropTypes.any,
  login: PropTypes.bool,
};
export default Password;
