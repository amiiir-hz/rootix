import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface T {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

type Props = {
  id: number;
  color: string;
  stroke: string;
  data: Array<T>;
};

function LineChart({ id, color, stroke, data }: Props) {
  return (
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id={`colorUv-${id}`}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            spreadMethod="reflect"
          >
            <stop offset="0" stopColor={color} />
            <stop offset="1" stopColor={"rgba(255,255,255,0)"} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          stroke={stroke}
          fill={`url(#colorUv-${id})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default LineChart;
