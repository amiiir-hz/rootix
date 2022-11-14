import React, {  useContext } from "react";
import { LangContext } from "src/shared/context/LanguageContext";
import Areachartbox from "./areachartbox";
type Props = {};

export default function index({}: Props) {
    const {
        dispatch: { translate },
      } = useContext(LangContext);
  return (
    <div>
      <Areachartbox translate={translate} />
    </div>
  );
}
