import React from "react";
import TableItem from "../../components/tableItem/tableItem";
import styles from "./swap.module.css";
import BitLOgo from "../../public/assets/Cryptocurrency.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Info from "@components/setting/Info";
import fetchData from "@components/fetchData/fetchdata";
// import TradingViewWidget, { Themes } from "react-tradingview-widget";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";
function Swap(props) {
  const [isLoading, setIsLOading] = useState(false);
  const [tradingData, setTradingData] = useState(null);

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("email", "user1@user.com");
  urlencoded.append("password", "123456");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const dataFetching = async () => {
    setIsLOading(true);

    const result = await fetchData("login", requestOptions);
    setIsLOading(false);
  };
  useEffect(() => {
    dataFetching();
  }, []);

  return !isLoading ? (
    <div>
      <div className=" w-[97%] mx-auto pb-[70px]">
        <div className="flex flex-row h-full">
          <Info />
        </div>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}
export default Swap;
