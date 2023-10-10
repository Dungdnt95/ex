import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";


const StraightAnglePieChart:React.FC<{data:[]}> = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
export default StraightAnglePieChart;
