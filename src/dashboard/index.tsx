import React, { useContext } from "react";
import { LangContext } from "src/shared/context/LanguageContext";
import Areachartbox from "./areachartbox";
import Tradingchart from "./tradingchart";
import Transaction from "./transaction";
import Trade from "./trade";
type Props = {};

export default function index({}: Props) {
  const {
    dispatch: { translate },
  } = useContext(LangContext);
  return (
    <div>
      <Areachartbox translate={translate} />
      <div className=" mt-[20px]">
        <Tradingchart translate={translate} />
      </div>
      <div className=" mt-[20px]">
        <Transaction translate={translate} />
      </div>
      <div className=" mt-[20px]">
        <Trade translate={translate} />
      </div>
    </div>
  );
}
