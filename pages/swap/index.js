import React from "react";
import TableItem from "../../components/tableItem/tableItem";
import styles from "./swap.module.css";
import BitLOgo from "../../public/assets/Cryptocurrency.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChangeBit from "../../components/changebit/changeBit";
import fetchData from "../../components/fetchData/fetchdata";
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
    // const tradingData = await import('react-tradingview-widget');
    // setTradingData(tradingData);

    const result = await fetchData("login", requestOptions);
    setIsLOading(false);
  };
  useEffect(() => {
    // import TradingViewWidget, { Themes } from "react-tradingview-widget";

    dataFetching();
  }, []);

  // fetch("https://api.rootix.ae/api/v1/login", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  // useEffect(() => {
  //   // import TradingViewWidget, { Themes } from "react-tradingview-widget";

  //   const data = import("react-tradingview-widget");
  // }, []);
  return !isLoading? (
    <div>
      <div className={styles.swap__container_widget}>
        <div className="flex flex-row h-full">
          {/* <TradingViewWidget
            symbol="NASDAQ:AAPL"
            theme={Themes.DARK}
            locale="fr"
            autosize
          /> */}
          <ChangeBit />
        </div>
      </div>
      <div className={`${styles.swap__container_first} `}>
        <div className="capitalize text-grey-700 font-light text-2xl mt-11 ml-9">
          recent activities
        </div>
        <table className="table-auto">
          <thead>
            <tr className=" flex flex-row px-9 mt-4">
              <div className="capitalize text-lighter text-base text-grey-700 w-1/4">
                name
              </div>
              <div className="capitalize text-lighter text-base text-grey-700 w-1/4">
                price
              </div>
              <div className="capitalize text-lighter text-base text-grey-700 w-1/4">
                exchamge
              </div>
              <div className="capitalize text-lighter text-base text-grey-700 w-1/4">
                time
              </div>
            </tr>
          </thead>
          <tbody>
          {/* <tr className=" flex flex-row px-9 mt-4">
            <td className="w-1/4 flex flex-row ">
              <div className=" w-8 h-8">
                <Image src={BitLOgo} alt="avatar" className="w-8 h-8"></Image>
              </div>
              <div className="ml-2 font-normal text-base">Bitcoin BTC</div>
            </td>
            <td className="w-1/4  font-normal text-base">$40,796.55</td>
            <td className="w-1/4  font-normal text-base text-red-500">0.002356</td>
            <td className="w-1/4  font-normal text-base">6/22/2022 14:30</td>
          </tr> */}
          <TableItem />
          <TableItem />
          <TableItem />
          <TableItem />
          <TableItem />

          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}
export default Swap;
