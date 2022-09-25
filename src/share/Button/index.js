function BtnPrimary({ children, className, onClick, type, disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} text-white  bg-[#11047A]  rounded-[70px] focus:outline-none `}
    >
      {children}
    </button>
  );
}
export { BtnPrimary };
function BtnPrimarylight({ children, className, onClick, type, disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-white  bg-[#4318FF]  rounded-[16px] focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}
export { BtnPrimarylight };
function BtnRed({ children, className, onClick, type, disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} text-white  bg-[#7a0404]  rounded-[70px] focus:outline-none `}
    >
      {children}
    </button>
  );
}
export { BtnRed };

function BtnSecondary({ children, className, onClick, type, disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} text-white dark:text-primary-dark  bg-[#11047A] dark:bg-[#E5E5E5]  rounded-[70px] focus:outline-none `}
    >
      {children}
    </button>
  );
}
export { BtnSecondary };
