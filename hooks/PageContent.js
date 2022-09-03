import React, { useState, useContext } from "react";

import { LanguageContext } from "../context/LanguageContext";

function PageContent(props) {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  //   if (text.) {

  //   } else {

  //   }
  const styles = {
    direction: userLanguage === "fa" ? "rtl " : "ltr",
    height: "100%",
    overflowX: "hidden",
  };
  return <div style={styles}>{props.children}</div>;
}

export default PageContent;
