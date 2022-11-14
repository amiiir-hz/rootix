import React, { useContext } from "react";
import Swap from "src/swap";
import { LangContext } from "src/shared/context/LanguageContext";
import Authorized from "@/src/shared/components/layout/Authorized";

type Props = {};

export default function index({}: Props) {
  const {
    dispatch: { translate },
  } = useContext(LangContext);
  return (
    <Authorized translate={translate}>
      <Swap translate={translate} />
    </Authorized>
  );
}
