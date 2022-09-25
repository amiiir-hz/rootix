import React from "react";
import { useController } from "react-hook-form";

const Select = ({
  name,
  defaultValue,
  message,
  control,
  register,
  className,
  label,
  absolute,
  placeholder,
  children,
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
    <div className="Select">
      <select
        placeholder={placeholder}
        className={`${className}`}
        {...field}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
};
export default Select;
