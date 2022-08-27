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
        "w-full flex flex-col items-start justify-center": `${full}flex flex-col items-start justify-center`,
      })}
    >
      {label ? <label className="mb-[20px]">{label} :</label> : null}
      <input
        type="text"
        className={classNames(` outline-0 ${className}`, {
          disabled: isDisabled,
        })}
        checked={isChecked}
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
