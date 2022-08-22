import React from "react";
import styles from "./dashboard.module.css";
import Image from "next/image";
import Logo from "../../public/assets/logorootix [Recovered]-0۲ 1.png";
import HomeLOgo from "../../public/assets/Vector (3).png";
import SwapLogo from "../../public/assets/Vector (4).png";
import TradeLogo from "../../public/assets/Vector (5).png";
import BanksLogo from "../../public/assets/Group 461.png";
import TicketLogo from "../../public/assets/Vector (8).png";
import ListLogo from "../../public/assets/Vector (12).png";

function Dashboard(props) {
  return (
    <div className={`w-72 h-screen ${styles.dashboard__container}`}>
      <div className={`mx-auto ${styles.dashboard__logo}`}>
        <Image src={Logo} alt="sgh"></Image>
      </div>
      <div className="font-sans text-2xl font-bold text-white uppercase text-center">
        rootix
      </div>
      <hr className="mt-2" />
      <div className="flex flex-col justify-center items-start mt-4">
        {/* font-weight bold and border right on select */}
        <div className=" mt-6 flex flex-row">
          <div className="mx-auto w-5 h-5 mx-7">
            <Image src={HomeLOgo} alt="sgh"></Image>
          </div>
          <div className="capitalize text-white">dashboard</div>
        </div>
        <div className=" mt-6 flex flex-row ">
          <div className="mx-auto w-5 h-5 mx-7">
            <Image src={SwapLogo} alt="sgh"></Image>
          </div>
          <div className="capitalize text-white">sWap</div>
        </div>
        <div className=" mt-6 flex flex-row ">
          <div className="mx-auto w-5 h-5 mx-7">
            <Image src={TradeLogo} alt="sgh"></Image>
          </div>
          <div className="capitalize text-white">trade</div>
        </div>
        <div className=" mt-6 flex flex-row ">
          <div className="mx-auto w-5 h-5 mx-7">
            <Image src={ListLogo} alt="sgh"></Image>
          </div>
          <div className="capitalize text-white">lists</div>
        </div>
        <div className=" mt-6 flex flex-row ">
          <div className="mx-auto w-5 h-5 mx-7">
            <Image src={BanksLogo} alt="sgh"></Image>
          </div>
          <div className="capitalize text-white">banks</div>
        </div>
        <div className=" mt-6 flex flex-row ">
          <div className="mx-auto w-5 h-5 mx-7">
            <Image src={TicketLogo} alt="sgh"></Image>
          </div>
          <div className="capitalize text-white">tickets</div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
