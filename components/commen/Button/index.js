function BtnPrimary({ children, className, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} text-white  bg-[#11047A]  rounded-[70px] focus:outline-none `}
    >
      {children}
    </button>
  );
}
export { BtnPrimary };

function BtnSecondary({ children, className, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} text-white dark:text-primary-dark  bg-[#11047A] dark:bg-[#E5E5E5]  rounded-[70px] focus:outline-none `}
    >
      {children}
    </button>
  );
}
export { BtnSecondary };
