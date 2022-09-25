import React, { useState } from "react";
// import Select from "@components/commen/Input/select";
import IconSelect from "src/share/Input/IconSelect";
import Select, { components } from "react-select";

// import styles from "./bitField.module.css";
import Image from "next/image";
import BitLOgo1 from "../../public/assets/bitcoin-logo-svgrepo-com.svg";
import { useForm } from "react-hook-form";

function BitField(props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // const { Option } = components;
  // const IconOption = (props) => (
  //   <Option {...props}>
  //     <img src={BitLOgo1} style={{ width: 36 }} alt="hghc" />
  //     bitField
  //   </Option>
  // );
  // The label supports JSX.
  const options = [
    {
      value: "chocolate",
      label: (
        <div className="flex flex-row justify-between">
          <img
            // className="card-img-top"
            width={24}
            height={24}
            src={"/assets/bitcoin-logo-svgrepo-com.svg"}
            alt="Card image cap"
          />
          Chocolate
        </div>
      ),
    },
    {
      value: "strawberry",
      label: (
        <div className="flex flex-row justify-between">
          <img
            width={24}
            height={24}
            // className="card-img-top"
            src={"/assets/bitcoin-logo-svgrepo-com.svg"}
            alt="Card image cap"
          />
          Strawberry
        </div>
      ),
    },
    {
      value: "vanilla",
      label: (
        <div className="flex flex-row justify-between">
          <img
            width={24}
            height={24}
            // className="card-img-top"
            src={"/assets/bitcoin-logo-svgrepo-com.svg"}
            alt="Card image cap"
          />{" "}
          Vanilla
        </div>
      ),
    },
  ];
  return (
    <div className="dark:bg-[#111C44] rounded-lg border-grey-400 w-full flex felx-row shadow-lg">
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[20px] text-center dark:text-white text-black"
      > */}
        {/* <Select
          control={control}
          name="name"
          register={{
            required: {
              value: false,
              // message: "Enter Name",
            },
          }}
          className="dark:bg-gray-800  text-black bg-white border rounded-lg  border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 w-40 focus:border-blue-500 mr-1 ml-0 h-10"
        >
          <option
            value="bitcoin"
            data-icon="glyphicon glyphicon-eye-open"
            data-subtext="petrification"
          >
            <div>
              <img
                className="card-img-top"
                src={"/assets/bitcoin-logo-svgrepo-com.svg"}
                alt="Card image cap"
              />
              <p>bitcoin</p>
            </div>
          </option>
          <option
            value="bitcoin1"
            data-icon="glyphicon glyphicon-eye-open"
            data-subtext="petrification"
          >
            bitcoin
          </option>
          <option
            value="bitcoin2"
            data-icon="glyphicon glyphicon-eye-open"
            data-subtext="petrification"
          >
            bitcoin
          </option>
        </Select> */}
        <IconSelect
          control={control}
          name="name"
          register={{
            required: {
              value: false,
              // message: "Enter Name",
            },
          }}
          className="dark:bg-gray-800 text-black bg-white rounded-lg -mt-8  border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 w-40 focus:border-blue-500 mr-1 ml-0 h-10"
          options={options}
        />
        <input
          type="number"
          name="bitValue"
          placeholder={0.0}
          min={0.0}
          max={100.0}
          step={0.01}
          className="bg-inherit border-none focus:border-0 h-10 rounded-lg"
        />
        {/* <button type="submit">click me</button> */}
      {/* </form> */}
      {/* <select className="dark:bg-gray-800 text-black bg-white border rounded-lg  border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 w-40 focus:border-blue-500 mr-1 ml-0 h-10">
        <option className="flex flex-row ">
          <svg
            viewBox="0.004 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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
          bitcoin
        </option>

        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select> */}
      {/* <div>
        <span>span elements</span>
        <p>without font-ello</p>
        <span className="">🎵</span>
        <p>with font-ello</p>
        <br />
        <br />
        <span className="entypo">🎵</span>
        <p>option fontello</p>
        <select>
          <option className="entypo">🎵</option>
          <option className="entypo">📈</option>
        </select>
        <p>nofontello</p>
        <select>
          <option className="">📈</option>
          <option className="">📈</option>
        </select>
      </div> */}
      {/* <select className="dark:bg-gray-800 text-black bg-white border rounded-lg  border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 w-40 focus:border-blue-500 mr-1 ml-0 h-10" name="state">
        <option value="AL">Alabama</option>
        
        <option value="WY">Wyoming</option>
      </select> */}
    </div>
  );
}
export default BitField;
