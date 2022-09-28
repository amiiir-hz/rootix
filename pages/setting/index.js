import React from "react";
import { useEffect, useState } from "react";
import Info from "src/components/setting/Info";
import { fetchData } from "@/src/share/fetchData/fetchdata";
import LoadingSpinner from "src/share/loadingSpinner/loadingSpinner";
import Layout from "src/share/layout/layout";

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
        <LoadingSpinner
          className={
            "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          }
          size="w-[100px] h-[100px]"
        />
      )}
    </Layout>
  );
}
export default Setting;
