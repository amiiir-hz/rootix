import React from "react";
// import styles from "./bitField.module.css";
// import Image from "next/image";
// import BitLOgo1 from "../../public/assets/bitcoin-logo-svgrepo-com.svg";

function BitField(props) {
  return (
    <div className='dark:bg-[#111C44] rounded-lg border-grey-400 w-full flex felx-row shadow-lg'>
      <select className="dark:bg-gray-800 text-black bg-white border rounded-lg  border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 w-40 focus:border-blue-500 mr-1 ml-0 h-10">
        <option>
          {/* <div value="" selected>
            <Image src={BitLOgo} alt="avatar" className="w-2 h-2" /> */}
          <svg
            width="16px"
            height="16px"
            viewBox="0.004 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z"
              fill="#f7931a"
            />
            <path
              d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z"
              fill="#fff"
            />
          </svg>
          {/* <Image className="" src={BitLOgo1} alt="hhh" width={10} height={10}></Image> */}
          bitcoin
          {/* </div> */}
        </option>
        {/* <option style="background-image:url(../../public/assets/Cryptocurrency.png);">male</option> */}

        {/* <option
          style={{
            backgroundImage: "url(../../public/assets/Cryptocurrency.png)",
          }}
        >
          male
        </option> */}

        {/* <option value='' selected>&#xf039; &nbsp; All States</option> */}

        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <input
        type="number"
        name="bitValue"
        placeholder={0.0}
        min={0.0}
        max={100.0}
        step={0.01}
        className="bg-inherit border-none focus:border-0 h-10 rounded-lg"
      />
    </div>
    // <div className="select-sim" id="select-color">
    //   <div className="options">
    //     <div className="option">
    //       <input type="radio" name="color" value="" id="color-" checked />
    //       <label htmlFor="color-">
    //         <Image src={BitLOgo} alt="" width={20} height={20}/> Select an
    //         option
    //       </label>
    //     </div>
    //     <div className="option">
    //       <input type="radio" name="color" value="red" id="color-red" />
    //       <label htmlFor="color-red">
    //         <Image src={BitLOgo} alt=""  width={20} height={20}/> Red
    //       </label>
    //     </div>
    //     <div className="option">
    //       <input type="radio" name="color" value="green" id="color-green" />
    //       <label htmlFor="color-green">
    //         <Image src={BitLOgo} alt=""  width={20} height={20}/> Green
    //       </label>
    //     </div>
    //     <div className="option">
    //       <input type="radio" name="color" value="blue" id="color-blue" />
    //       <label htmlFor="color-blue">
    //         <Image src={BitLOgo} alt=""  width={20} height={20}/> Blue
    //       </label>
    //     </div>
    //     <div className="option">
    //       <input type="radio" name="color" value="yellow" id="color-yellow" />
    //       <label htmlFor="color-yellow">
    //         <Image src={BitLOgo} alt=""  width={20} height={20}/> Yellow
    //       </label>
    //     </div>
    //     <div className="option">
    //       <input type="radio" name="color" value="pink" id="color-pink" />
    //       <label htmlFor="color-pink">
    //         <Image src={BitLOgo} alt=""  width={20} height={20}/> Pink
    //       </label>
    //     </div>
    //     <div className="option">
    //       <input
    //         type="radio"
    //         name="color"
    //         value="turquoise"
    //         id="color-turquoise"
    //       />
    //       <label htmlFor="color-turquoise">
    //         <Image src={BitLOgo} alt=""  width={20} height={20} /> Turquoise
    //       </label>
    //     </div>
    //   </div>
    // </div>
  );
}
export default BitField;
