import React from "react";
import TableItem from "../../components/tableItem/tableItem";
import styles from "./swap.module.css";
import BitLOgo from "../../public/assets/Cryptocurrency.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChangeBit from "../../components/changebit/changeBit";
import { fetchData } from "../../components/fetchData/fetchdata";
// import TradingViewWidget, { Themes } from "react-tradingview-widget";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";
import dynamic from "next/dynamic";
import Layout from "@components/layout/layout";

const ReactViewWidget = dynamic(
  () => {
    return import("react-tradingview-widget");
  },
  { ssr: false }
);

function Swap(props) {
  const [isLoading, setIsLOading] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [tradingData, setTradingData] = useState(null);
  const [swapTable, setSwapTable] = useState("");

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTc0YTZlNjU4N2IxNDhiNGJlNDFiNTNlM2RlMzlkMTA2ODNjZTlmNjdiNjgwMWFmNDNiMGRmYjM1OGM5NTgyMGU5MjI4M2FmNTRkMWYxNmMiLCJpYXQiOjE2NjA4MDA3NDUuOTE2MzgsIm5iZiI6MTY2MDgwMDc0NS45MTYzODQsImV4cCI6MTY5MjMzNjc0NS45MTM2OTksInN1YiI6IjEiLCJzY29wZXMiOltdfQ.Jwmd4pUVEl29y6iF7ONKaI1WYgDMvGt5ZdCSYo--pjKNdukzp5USGAxIO4xH3UdYLvZRNPN18-E6fd4L3I5rLHgM5lsQrvvf_lA0lEhWRV3K6wpdCtWDceYRRg6l3m_2MYJwM6sqyoy1N_q5nW_UDvGIS_lFeOZcx7eUnHlSXenItcYCcRxCecHSxzM-xj_4Hy9EDQX26pur5Rqoixh9mQo3m0BaEYRBp_9LnzmMMt71qrxqwRE2TLshy8NTMtO1e0Rwl8FpLIm0AzRpCixCmBL-uSefZ4DWUnaofocmQXPmRD8yLjWWOGcqsFlA9dJWK_v4VW9KPEYxKaEsdfvHVP7RLF0RWHF634uxg7GD6BT8UkG8Q_u0z7YP5f40XnRIRyX7BN4L07HHsVY0bs9lBRg5RvmCRxrKGp87Z3FYBIuTJu3Z6Uz2APaqkeltbnG1rUM4dhhmUv8YogeyOPeZgzIjVwCPd0HVPt8VklRtrFZ09NrndFwdHcb_TqyJQSOlyQhYI2CWJXjWC3GADfzeb8P89-M1YlktzWSwCb5ODOQ48ru81uGBbOLOXkrqDaXSMCjoj7x770o-DdxMzgtzp4Fi99eLGvcmwmxK2JOGL4Zxl17XdvVv-OCfRMekJ77I8va0OjsLrPepe7rFtdEgH70n9mtAS16Zpajcgu51oCo"
  );

  // var requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow",
  // };
  //  const dataFetching = async () => {
  //     setIsLOading(true);
  //     const response = fetchData("setting").then((data) => setData(data.data));
  //     setIsLOading(false);
  //   };
  const dataFetching = async () => {
    setIsLOading(true);
    const result = fetchData("swap").then((data) => setSwapTable(data.data));

    // const result = await fetchData("swap", requestOptions);
    // const result2 = await setSwapTable(result.recent_swap)
    // setSwapTable(result.recent_swap)

    if (result) {
      console.log(result.recent_swap);
      setIsLOading(false);
    }
  };
  useEffect(() => {
    // setTheme(localStorage.getItem('theme'))
    // import TradingViewWidget, { Themes } from "react-tradingview-widget";
    // console.log(111111111111111111111111111111111111111,theme);
    dataFetching();
    console.log(swapTable);
  }, []);

  // fetch("https://api.rootix.ae/api/v1/login", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  // useEffect(() => {
  //   // import TradingViewWidget, { Themes } from "react-tradingview-widget";
  //   const data = import("react-tradingview-widget");
  // }, []);
  // if (theme === "light") {

  // }
  return (
    <Layout>
      {!isLoading ? (
        <div>
          <div className={`${styles.swap__container_widget} md:h-96`}>
            <div className="flex flex-col-reverse md:flex-row h-full">
              <ReactViewWidget
                symbol="NASDAQ:AAPL"
                theme={theme}
                locale="en"
                autosize
                // className="h-100"
                // height="md:h-full"
              />
              <ChangeBit />
            </div>
          </div>
          <div
            className={`${styles.swap__container_first}  bg-white text-black shadow-lg rounded-md dark:bg-[#111c44] dark:text-[#e4e4e4]`}
          >
            <div className="capitalize font-light text-2xl mt-11 ml-9">
              recent activities
            </div>
            <table className="table-auto">
              <thead>
                <tr className="flex flex-row md:px-9 mt-4">
                  <div className="capitalize text-lighter text-base w-1/4">
                    name
                  </div>
                  <div className="capitalize text-lighter text-base w-1/4">
                    price
                  </div>
                  <div className="capitalize text-lighter text-base w-1/4">
                    exchamge
                  </div>
                  <div className="capitalize text-lighter text-base w-1/4">
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
      )}{" "}
    </Layout>
  );
}
export default Swap;
