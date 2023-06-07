import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import dynamic from "next/dynamic";
import MyThemeContext from "src/shared/context/MyThemeContext";
// import { useSwapUser } from "./queries/querie";
// import type { user } from "./queries/types";
import "semantic-ui-css/semantic.min.css";

export default function Top({ translate }: AboutProps) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [theme, setTheme] = useState<boolean | undefined>(false);
  useEffect(() => {
    setTheme(themeCtx?.isDarkTheme);
  }, [getLocalStorage("isDarkTheme")]);

  return (
    <div className="h-full overflow-auto">
      <div className="hidden md:block font-sans text-2xl font-bold text-[#2B3674] dark:text-white uppercase">
        rootix
      </div>
    </div>
  );
}
