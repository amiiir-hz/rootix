import PropTypes from "prop-types";
import React from "react";
import { Controller, useController } from "react-hook-form";
// import classNames from 'classnames';

const Toggle = ({
  name,
  value,
  message,
  control,
  register,
  className,
  classNameswitch,
  classNameparent,
  label,
  absolute,
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
  return (
    <div className={classNameparent}>
      {label ? <label className="input__label">{label} :</label> : null}
      <label className={`switch relative inline-block ${classNameswitch}`}>
        <input
          type="checkbox"
          {...field}
          {...rest}
          className=" opacity-0 w-0 h-0"
        />
        <span
          className={`cursor-pointer absolute top-0 right-0 bottom-0 left-0 slider round before:rounded-full ${className} before:absolute before:content-[''] before:w-[16px] before:h-[16px] before:left-[0.5px]  before:bottom-[0.5px]`}
        ></span>
      </label>
      {error && <span className="input__message">{error.message}</span>}
    </div>
  );
};

Toggle.propTypes = {
  classes: PropTypes.any,
  control: PropTypes.any,
  errors: PropTypes.any,
  label: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.any,
  value: PropTypes.any,
};
export default Toggle;
