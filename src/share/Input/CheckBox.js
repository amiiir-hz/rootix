import PropTypes from "prop-types";
import React from "react";
import { Controller, useController } from "react-hook-form";
import classNames from "classnames";

const CheckBox = ({
  name,
  message,
  control,
  register,
  className,
  classNamedir,
  label,
  onSelected,
  large,
  ...rest
}) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: register,
    defaultValue: false,
  });
  return (
    <div className="input">
      <div className=" flex items-center justify-start flex-row-reverse">
        {label ? <label className={` ${classNamedir}`}>{label}</label> : null}
        <input
          type="checkbox"
          id="cb1"
          className={classNames("checkbox checkbox-secondary", [className], {
            input__error: error,
            checkbox__large: large,
          })}
          onChange={(e) => {
            !!onSelected && onSelected(e.target.checked);
            onChange(e);
          }}
          checked={value || false}
          {...rest}
        />
      </div>

      {error && <span className="input__message">{message}</span>}
    </div>
  );
};

CheckBox.defaultProps = {
  value: false,
};

CheckBox.propTypes = {
  className: PropTypes.any,
  classNamedir: PropTypes.any,
  control: PropTypes.any,
  errors: PropTypes.any,
  label: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.any,
  value: PropTypes.bool,
};
export default CheckBox;
