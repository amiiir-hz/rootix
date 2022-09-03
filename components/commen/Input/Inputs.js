import PropTypes from "prop-types";
import React from "react";
import { Controller, useController } from "react-hook-form";
import classNames from "classnames";

const Inputs = ({
  name,
  defaultValue,
  message,
  control,
  register,
  className,
  classNamedir,
  label,
  absolute,
  full,
  isChecked,
  isDisabled,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: register,
    defaultValue: defaultValue,
  });
  return (
    <div
      className={classNames({
        "w-full flex flex-col items-start justify-center": `flex flex-col items-start justify-center ${full}`,
      })}
    >
      {label ? (
        <label className={`mb-[20px] ${classNamedir}`}>{label}</label>
      ) : null}
      <input
        type="text"
        className={classNames(` outline-0  ${className}`, {
          disabled: isDisabled,
        })}
        autoFocus
        autoComplete="off"
        {...field}
        {...rest}
      />

      {error && (
        <span className=" text-[14px] block mt-1 text-red-600">
          {error.message}
        </span>
      )}
    </div>
  );
};

Inputs.propTypes = {
  classes: PropTypes.any,
  control: PropTypes.any,
  errors: PropTypes.any,
  label: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.any,
  defaultValue: PropTypes.any,
};
export default Inputs;
