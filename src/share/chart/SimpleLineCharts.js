import React, { FunctionComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function SimpleLineCharts({ data }) {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#4318FF"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#6AD2FF" strokeWidth={1} dot={false}  activeDot={false} />
    </LineChart>
  );
}

export default SimpleLineCharts;
