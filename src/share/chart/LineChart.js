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
import useDarkMode from "src/share/hooks/useDarkMode";
function LineChart(props) {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <ResponsiveContainer>
      <AreaChart
        data={props.data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id={`colorUv-${props.id}`}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            spreadMethod="reflect"
          >
            <stop offset="0" stopColor={props.color} />
            <stop offset="1" stopColor={"rgba(255,255,255,0)"} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          stroke={props.stroke}
          fill={`url(#colorUv-${props.id})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default LineChart;
