import React from "react";
import { useEffect, useState } from "react";
import Info from "@components/setting/Info";
import { fetchData } from "@components/fetchData/fetchdata";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2JmZDM2NDNkZTM0NTQzY2MzMmZlMDQ1N2M2NTU2MWU3MzQ4NTUwNzRmYzEwMTg1OWE2MTZiNmUxMzNmNDBiNTUxNjhkZmVkNjgzZmI0N2EiLCJpYXQiOjE2NjE2Nzc1NjYuMDAzMjc1LCJuYmYiOjE2NjE2Nzc1NjYuMDAzMjc2LCJleHAiOjE2OTMyMTM1NjYuMDAxNzQxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.AbKoJHxYWcj6hjBXLEixxiQ60nSyD3Bsff8-BshUnMmRAdOYT_s3VOOQrlP_o6Juh1LQgN3kuaZEbXKO6Mc8DYv4PbrgHIi_N5a_w4Z_jxMqcGJbmV4JwYjHnQ5T8HCziQgwIQ4TxfZyHbg0SxwTv1UVp7KqybH17MZdHCFIWAIiI6AkHj53WLOjtVzVOPlNbmNaixoErksYtoPnSk0GwRU8h_lFa8JoGkwHrqyqMwaCZ1xSlunICgIn4MC1tAXHWxKJekcnUB2YcSSm1LLT5a2vhrctkavyd-lig0uN5Vp0Y5VK7kI4ujmEIRve8k1XrjyHs-ZLwdopqnonFp4CQq3x73lgG4wcLk18Yq1lyQZMtx-uP-lzQLXlKyI633qmhVUJIkkhxNrERDk3DAVU8y1Bzk2eOCkmt-CCIU8DFMGELxZDt9LUiOtEaRmG5YGcfEjBvYtnP3J2plPryPGDKk5KnbJIU_lXQwjhiETs6PUn8yEtaXPCEni2gwGqTZPJogEgMMu1Zag3GDlMstyjeSgRRSYZLXi4QiCqA3J9HcaalGxe914nwRN52A8Hik3oPzGF7nEHFQx_a8uCZ11OCOrFfKpuSjednL_lF1mbIntvcF21CFFEvo2OWQBA26437liK3iZFKIdilWoh8BnFw88vDfdEs6RZwRlNhjwtBDM";
function Setting(props) {
  const [isLoading, setIsLOading] = useState(false);
  const [data, setData] = useState(null);

  const dataFetching = async () => {
    setIsLOading(true);
    const response = fetchData("setting").then((data) => setData(data.data));
    setIsLOading(false);
  };
  useEffect(() => {
    dataFetching();
  }, []);
  console.log("data :>> ", data);
  return !isLoading ? (
    <div>
      <div className=" w-[97%] mx-auto pb-[70px]">
        <div className="flex flex-row h-full">
          <Info data={data} />
        </div>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}
export default Setting;
