import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage } from "src/shared/storage/localStorage";
import dynamic from "next/dynamic";
import MyThemeContext from "src/shared/context/MyThemeContext";
import "semantic-ui-css/semantic.min.css";
import Swapselect from "./swapselect";
import Recentactivity from "./recentactivity";
import Table from "src/shared/components/table";
import dayjs from "dayjs";
const today = dayjs();
export default function Index({ translate }: AboutProps) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [theme, setTheme] = useState<boolean | undefined>(false);
  useEffect(() => {
    setTheme(themeCtx?.isDarkTheme);
  }, [getLocalStorage("isDarkTheme")]);


  return (
    <div className="h-full overflow-auto">
     <div>
      <Table translate={translate} header={header} list={list} />
    </div>
    </div>
  );
}
const header = [
  { title: "status" },
  { title: "status" },
  { title: "status" },
  { title: "status" },
  { title: "status" },
  { title: "joinedAt" },
];
const list = [
  {
    code: 123456,
    name: "saba beigi",
    email: "beigisaba@gmail.com",
    passcode: 123456789123,
    status: "step 1",
    joind: today,
  },
  {
    code: 123456,
    name: "saba beigi",
    email: "beigisaba@gmail.com",
    passcode: 123456789123,
    status: "step 1",
    joind: today,
  },
  {
    code: 123456,
    name: "saba beigi",
    email: "beigisaba@gmail.com",
    passcode: 123456789123,
    status: "step 1",
    joind: today,
  },
  {
    code: 123456,
    name: "saba beigi",
    email: "beigisaba@gmail.com",
    passcode: 123456789123,
    status: "step 1",
    joind: today,
  },
  {
    code: 123456,
    name: "saba beigi",
    email: "beigisaba@gmail.com",
    passcode: 123456789123,
    status: "step 1",
    joind: today,
  },
];
