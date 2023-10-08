import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["T/OVER", "COG"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const ChartUI = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const search = async () => {
      let params = { userId: 1, q: "Q2", year: "2023" };

      const result = await axios.get("http://localhost:3001/search", {
        params,
      });
      setChartData(result.data.data.data);
    };
    search();
  }, []);
  data.datasets[0].data = [1, 2];
  return (
    <>
      {chartData.length > 0 && (
        <div className="chart">
          <p>Accessories</p>
          <Pie data={data} />
          <Pie data={data} />
          <Pie data={data} />
        </div>
      )}
    </>
  );
};
export default ChartUI;
