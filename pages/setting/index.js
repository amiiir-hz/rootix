import React from "react";
import { useEffect, useState } from "react";
import Info from "@components/setting/Info";
import { fetchData } from "@components/fetchData/fetchdata";
import LoadingSpinner from "@components/loadingSpinner/loadingSpinner";
import Layout from "@components/layout/layout";

function Setting(props) {
  const [isLoading, setIsLOading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);

  const dataFetching = async () => {
    setIsLOading(true);
    const response = fetchData("setting")
      .then((data) => setData(data?.data))
      .catch((error) => {
        console.log("error :>> ", error);
      });

    setIsLOading(false);
  };
  useEffect(() => {
    dataFetching();
  }, []);
  console.log("data :>> ", data);
  return (
    <Layout>
      {!isLoading ? (
        <div>
          <div className=" w-[97%] mx-auto pb-[70px]">
            <div className="flex flex-row h-full">
              <Info data={data} />
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </Layout>
  );
}
export default Setting;
