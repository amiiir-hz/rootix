import React, { useState } from "react";

const Modal = ({ show, setShow, key, className, ...props }) => {
  // const [isShowing, setIsShowing] = useState(show);

  // function toggleModal() {
  //     setIsShowing(!isShowing);
  // }

  // console.log(isShowing);

  const divStyle = {
    display: show ? "block" : "none",
    // width: "80%",
  };

  const closeModal = (e) => {
    e.stopPropagation();
    props.closeModal();
  };

  return (
    // <div key={key}>
    <div
      className=" z-[10] w-full h-full fixed top-0 left-0 overflow-auto"
      style={divStyle}
      onClick={closeModal}
    >
      <div className=" w-full h-full dark:bg-[#ffffff42]  bg-[#111c448f] flex justify-center items-center">
        <div
          className={`${className}  relative  pt-[32px] pb-[14px] px-[17px] dark:bg-[#111C44]  dark:text-white text-black rounded-[2px] bg-white dark:shadow-basic shadow-basiclight  z-[1000] h-auto max-h-[90%] overflow-auto `}
          onClick={(e) => e.stopPropagation()}
        >
          {props.children}
        </div>
      </div>
    </div>
    // </div>
  );
};

export { Modal };
