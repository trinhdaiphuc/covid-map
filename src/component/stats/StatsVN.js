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
    <div className="stats">
      <h6>
        Biểu đồ số ca mắc mới, số ca nghi nhiễm, số ca khỏi theo thời gian Việt
        Nam
      </h6>
      <LineChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 0,
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
    </div>
  );
};

export default StatsVN;
