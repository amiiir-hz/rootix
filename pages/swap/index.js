import React from "react";
import TableItem from "src/components/tableItem/tableItem";
import styles from "./swap.module.css";
import BitLOgo from "public/assets//Cryptocurrency.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChangeBit from "src/components/changebit/changeBit";
import { fetchData } from "@/src/share/fetchData/fetchdata";
import fetchDataj from "@/src/share/fetchData/fetchDataj";
// import TradingViewWidget, { Themes } from "react-tradingview-widget";
import LoadingSpinner from "src/share/loadingSpinner/loadingSpinner";
import dynamic from "next/dynamic";
import Layout from "src/share/layout/layout";

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
  // var myHeaders = new Headers();
  // myHeaders.append("Accept", "application/json");
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append(
  //   "Authorization",
  //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTU5YWRmNTZjMmJlMTUzYTAyMTA3MjYwMDBmNjE5MjI5ZmU3NDFhMDM4NDFiZWZjNmY2OGZlYzE4ZDk5ODcxY2E5NWZiNjBkMzc4Mjc4ZjgiLCJpYXQiOjE2NjIwMTY0MjMuODU5ODI4LCJuYmYiOjE2NjIwMTY0MjMuODU5ODMsImV4cCI6MTY5MzU1MjQyMy44NTg0NTksInN1YiI6IjEiLCJzY29wZXMiOltdfQ.1-GPu-hVNEqAXXfuWimjmkmogRwTqaXm1JEn7B9Sa_W0AjmD0XU49S7N0lz5oX_Buh8XWeHZ7qzuy3OnG2FQ2B4dQjBj5YX-shwXeRv3b2AfIARyEImjBgkMT72FGzO1eOMsrOxkjCZO0PXhe3OZu8Wmoej74BiYPOSml7Jx7SYH4iptEVZj-NJ5902fQMHY2JYjjB7Tn0QQhaYafmHa7FCQ3r-wcHnieEBj78bV2atekXFxitsW64FSMomyjq2O3Hu0AUsK9mVC8PZHdVVRWPdtbXbxQn3_9jnbR3t6Jf0T3DjbjC7R4Qp_puoD5UTR3lGwlwc2YnFo-sRSW2QApb9CTUYPZVBC_Av4_2DaIOyR_AOrfeqJD_rm8RZaoBPXUTQYZPNoD2WcNwjST_ucP3IuT4O0H776wrjaG_t5tVb0vHUYYVEc8PfHDJiYld_GkHT4woaltj9oJktVlQ-kP_h3zQpxSHGq_HFW81O46G7Gmb3WAzxua9Ic9PlHXyH3MJBesS9wYnGPh11X1MT_NbnwzKPM7IsGbWZIL7_KperaYSpRehtz6JaefFTRSjn7-7MxRBdbz-LahlbVcl1mMlweg2e81SwGPppa0crAcPjGJQ3O5QFN22m2gjedI_y0kYlfrGvsVnqn8wJWh1a79hI-XGLdZ9TYUXEjiSeOat8"
  // );

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
  // const dataFetching = async () => {
  //   setIsLOading(true);
  //   const result = await fetchData("swap").then((data) =>
  //   setSwapTable(data.data)
  //     // setSwapTable(data.data)
  //     // console.log("oooooooooooooooo", result)
  //   );
  //   if (result) {
  //   setIsLOading(false);
  //   }

  //   // let result2 = result.recent_swap;
  //   // swapTable.recent_swap.map((res, index)=>{
  //   //   console.log('lllllllllllll',res);
  //   // })
  // };
  // useEffect(() => {
  //   dataFetching();
  //   console.log('swap',swapTable);
  // }, []);
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWM5ZmU5MDhhMDdmZmFhMWRiYmExNDdiYTFiZjE5ZjI0Y2VhM2Q0Yzg2MDlhMmFmOTRhNTA3NThkNmM0YjZhYWM0YTkyZDQ3ZjhlMjQ1NjgiLCJpYXQiOjE2NjIwMTc2NzYuOTYzMDQ5LCJuYmYiOjE2NjIwMTc2NzYuOTYzMDUxLCJleHAiOjE2OTM1NTM2NzYuOTYxNjA1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qXGYIcFfkMtHJUwGfKUnpaUIpYkrU0M4aKF858r1yUgaRf_w1eBKa0iZRC9T4vWSDK7nUKd4P3bhZnEnPDng_G5fuK2ZC-Cm8RpPmTYGmdj4TKZBZittuS0UQDQ93HsV0fh_arQYpnYb6l4X_dkyZiVuQ8Taw3Yi3rXxk3c1AzZnp6N45A9b-4s7YaYTraTGefJNx-IlH89P5bTMQm3kBnQPkh4DI6Y7_hb1LU_v3DifS1dY6cYvqAdQlQDZDOAcmw_fv9n9ywThoeUcC2a6Yzn5jFN0rQXov82II_VO-ijb8BeLNCu9yqeEYCYp3Vz5tCY0rWja3CevJsBumoxPh-nfDoIZv71_M00G2umKEmOoam67Rh-8KEN7_lFAn4v0UwqZSmQCL2Nw4mk81FSXWfDyMjRqEq16IQMYvduOeqRMHklfiFg9ADJ1cno-jIV2J1iLjHbz6KiZXGIjG7T_bSpnzaJTWwwR4eeEZQLJpR0yIXs4zCXaeOQ6aawHsuITrCsg_LsESLyTjDt9QDyKHHuxEn_9wD6TZ_rQsMuRW_VB9AcwG44zXc3P62O_Qk-exER1XvbBrJE-cvQ0LuO6TEJG71DNg3F5mmgbk1d20BDVzO8hG5VNxKdJF0gNDA1CDQlLHHg9T5MG4o6LI1mtwWVzPK8KhVCkNOKT1vA6SwU"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  //  const dataFetching = async () => {
  //     setIsLOading(true);
  //     const response = fetchData("setting").then((data) => setData(data.data));
  //     setIsLOading(false);
  //   };
  const dataFetching = async () => {
    setIsLOading(true);

    const result = await fetchDataj("swap", requestOptions);
    // console.log(result, "result");

    // let result2 = result.data;
    // console.log(result2, "result2");

    // let result3 = result2.recent_swap;
    // console.log(result3, "result3");
    setSwapTable(result.data.recent_swap);
    // if (swapTable.length > 1) {
    // console.log(swapTable, "swaptaBLE");
    setIsLOading(false);
    // }

    // result3.map((res, index)=>{
    //   setSwapTable
    // });

    // result2.map((res, index) => {
    //   if (res.key === "feature_details") {
    //     setFeatureDetail(res.contents);
    //     // console.log(1111111111111, res.contents);
    //   }
    //   if (res.key === "usecase") {
    //     setUsecase(res.contents);
    //     // console.log(222222222222, res.contents);
    //   }
    // });
    // if (featureDetail && usecase) {
    //   setIsLOading(false);
    //   // console.log(333333333333333);
    // }
  };
  useEffect(() => {
    dataFetching();
  }, []);
  // const dataFetching = async () => {
  //   setIsLOading(true);
  //   const response = fetchData("swap").then((data) => setSwapTable(data.data));
  //   if (response) {

  //   }
  //   setIsLOading(false);
  // };
  // useEffect(() => {
  //   dataFetching();
  //   console.log(swapTable);
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
        <LoadingSpinner
          className={
            "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          }
          size="w-[100px] h-[100px]"
        />
      )}{" "}
    </Layout>
  );
}
export default Swap;
