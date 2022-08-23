import React from "react";
import styles from "./tableItem.module.css";
import Image from "next/image";
import BitLOgo from "../../public/assets/Cryptocurrency.png";


function TableItem(props) {
  return (
    <div>
      <hr className={styles.tableitem__h_line} />
          <tr className=" flex flex-row px-9 mt-4">
            <td className="w-1/4 flex flex-row ">
              <div className=" w-8 h-8">
                <Image src={BitLOgo} alt="avatar" className="w-8 h-8"></Image>
              </div>
              <div className="ml-2 font-normal text-base">Bitcoin BTC</div>
            </td>
            <td className="w-1/4  font-normal text-base">$40,796.55</td>
            <td className="w-1/4  font-normal text-base text-red-500">0.002356</td>
            <td className="w-1/4  font-normal text-base">6/22/2022 14:30</td>
          </tr>
    </div>
  );
}
export default TableItem;
