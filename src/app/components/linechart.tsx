"use client";
import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
  Brush,
  ReferenceLine,
} from "recharts";

const data = [
  {
    name: "2015",
    uv: 4000,
    pv: 2400,
    mf: 1500,
  },
  {
    name: "2020",
    uv: 3000,
    pv: 1398,
    mf: 2000,
  },
  {
    name: "2021",
    uv: 2000,
    pv: 7000,
    mf: 3000,
  },
  {
    name: "2022",
    uv: 2780,
    pv: 3908,
    mf: 10000,
  },
  {
    name: "2023",
    uv: 1890,
    pv: 4800,
    mf: 12000,
  },
  {
    name: "2024",
    uv: 2390,
    pv: 3800,
    mf: 17000,
  },
  {
    name: "2025",
    uv: 3490,
    pv: 4300,
    mf: 21000,
  },
];

const LineChartCustomElement = () => {
  return (
    <>
      <div className="h-auto">
        <LineChart
          width={1000}
          height={250}
          data={data}
          margin={{ top: 15, right: 10, left: 10, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="mf" stroke="#FF204E" />
        </LineChart>
      </div>
    </>
  );
};

export default LineChartCustomElement;
