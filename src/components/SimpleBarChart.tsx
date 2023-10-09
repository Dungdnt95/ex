import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Turn Over",
    Tasmania: 4000,
    Average: 2400,
  },
  {
    name: "Margin",
    Tasmania: 3000,
    Average: 1398,
  },
];

const SimpleBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Tasmania" fill="#8884d8" />
        <Bar dataKey="Average" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default SimpleBarChart;
