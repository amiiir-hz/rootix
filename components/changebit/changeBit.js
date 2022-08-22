import React from "react";
import BitField from "../bitField/bitField";
import styles from "./changeBit.module.css";
import BitLOgo from "../../public/assets/Cryptocurrency.png";
import ChangeLOgo from "../../public/assets/swap_vert_black_24dp 1.png";
import Image from "next/image";

function ChangeBit() {
  return (
    <div className={styles.changeBit__container}>
      <div className="flex flex-row pb-3 justify-between">
        <div className="text-grey-100 capitalize">from</div>
        <div className="text-grey-300 ">assete: 123456789</div>
      </div>
      <BitField />
      <div className="w-8 h-10 my-5 mx-auto ">
        <Image src={ChangeLOgo} alt="avatar"></Image>
      </div>
      <BitField />
      <div className="text-grey-300 mb-3 my-5">fee : 123456789</div>
      <div className="text-grey-300 ">you get : 123456789</div>
      <button type="button" className={styles.changeBit__button}> change</button>
    </div>
  );
}
export default ChangeBit;
