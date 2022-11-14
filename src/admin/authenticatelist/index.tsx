import React from "react";
import Table from "src/shared/components/table";
import dayjs from "dayjs";

type Props = {};
const today = dayjs();

export default function index({ translate }: AboutProps) {
  return (
    <div>
      <Table translate={translate} header={header} list={list} />
    </div>
  );
}
const header = [
  { title: "usercode" },
  { title: "name" },
  { title: "emaill" },
  { title: "passportcode" },
  { title: "status" },
  { title: "joinedAt" },
  { title: "" },
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
