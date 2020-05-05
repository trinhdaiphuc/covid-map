import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const StatsVN = ({ data, stroke }) => {
  return (
    <LineChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Nhiễm" stroke={stroke[0]} />
      <Line type="monotone" dataKey="Nghi Nhiễm" stroke={stroke[1]} />
      <Line type="monotone" dataKey="Bình phục" stroke={stroke[2]} />
    </LineChart>
  );
};

export default StatsVN;
