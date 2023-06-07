import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import dynamic from "next/dynamic";
import MyThemeContext from "src/shared/context/MyThemeContext";
// import { useSwapUser } from "./queries/querie";
// import type { user } from "./queries/types";
import "semantic-ui-css/semantic.min.css";
import Top from "./top";
import Sidebar from "./sidebar";

export default function Index({ translate }: AboutProps) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [theme, setTheme] = useState<boolean | undefined>(false);
  useEffect(() => {
    setTheme(themeCtx?.isDarkTheme);
  }, [getLocalStorage("isDarkTheme")]);

  return (
    <div className="h-full overflow-auto flex">
      <Sidebar translate={translate} />
      <div>
        <Top translate={translate} />
      </div>
    </div>
  );
}
