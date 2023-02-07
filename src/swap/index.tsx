import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import dynamic from "next/dynamic";
import MyThemeContext from "src/shared/context/MyThemeContext";
import { useSwapUser } from "./queries/querie";
import type { user } from "./queries/types";
import "semantic-ui-css/semantic.min.css";
import Swapselect from "./swapselect";
import Recentactivity from "./recentactivity";

const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

export default function Index({ translate }: AboutProps) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [theme, setTheme] = useState<boolean | undefined>(false);
  useEffect(() => {
    setTheme(themeCtx?.isDarkTheme);
  }, [getLocalStorage("isDarkTheme")]);

  const [data, setData] = useState<user | undefined>();

  const swapUserQuery = useSwapUser({
    onSuccess: () => {
      console.log("done");
    },
  });
  useEffect(() => {
    setData(swapUserQuery?.data);
  }, [swapUserQuery?.data]);

  return (
    <div className="h-full overflow-auto">
      <div className=" md:grid md:grid-cols-[2.5fr_1fr] md:gap-x-[30px] flex flex-col items-center justify-center">
        <div className="hidden invisible md:visible md:inline-block w-full h-full">
          <AdvancedRealTimeChart
            theme={theme ? "dark" : "light"}
            autosize
            hide_top_toolbar
            hide_side_toolbar
            hide_legend
            height={"100%"}
            interval="D"
          ></AdvancedRealTimeChart>
        </div>

        <Swapselect data={data} translate={translate} />
      </div>
      <div className="w-full bg-[#313135] h-[0.5px] my-[28px]"></div>
      <div className="dark:bg-[#111C44] w-full bg-white rounded-[12px] pt-[44px] px-[36px] pb-[35px] ">
        <p className=" dark:text-[#E4E4E4] text-[#202020] text-[23px] leading-[28px] font-normal mb-[43px]">
          {translate("RecentActivities")}
        </p>
        <Recentactivity data={data} translate={translate} />
      </div>
    </div>
  );
}
