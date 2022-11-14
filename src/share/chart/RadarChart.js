import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBar,
} from "recharts";

function RadarCharts({ data }) {
  return (
    <RadarChart outerRadius={90} width={232} height={241} data={data}>
      <defs>
        <linearGradient
          id={`RadarcolorUv`}
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          spreadMethod="reflect"
        >
          <stop offset="0" stopColor={"#21CFD3"} />
          <stop offset="1" stopColor={"#1EDDC5"} />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient
          id={`RadarcolorUv1`}
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          spreadMethod="reflect"
        >
          <stop offset="0" stopColor={"#9EA5D9"} />
          <stop offset="1" stopColor={"#9794D7"} />
        </linearGradient>
      </defs>
      <PolarGrid radialLines={false}  />
      <PolarAngleAxis dataKey="subject" tick={{ fill: "#fff", fontSize: 14 }} />
      <Radar
        name="Lily"
        dataKey="A"
        stroke="transparent"
        fill={`url(#RadarcolorUv1)`}
        fillOpacity={1}
      />
      <Radar
        name="Mike"
        dataKey="B"
        stroke="transparent"
        fill={`url(#RadarcolorUv)`}
        fillOpacity={1}
      />
    </RadarChart>
  );
}

export default RadarCharts;
