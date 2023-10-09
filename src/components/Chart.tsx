import React, { useEffect, useState } from "react";
import axios from "axios";
import StraightAnglePieChart from "./StraightAnglePieChart";
import SimpleBarChart from "./SimpleBarChart";
const ChartUI = () => {
  const [chartData, setChartData] = useState<string[]>([]);
  const [tunr, setRurn] = useState<string[]>([]);
  useEffect(() => {
    const search = async () => {
      let params = { userId: 1, q: "Q1", year: "2023" };

      const result = await axios.get("http://localhost:3001/search", {
        params,
      });
      let userId = 1;
      let map: string[] = [];
      result.data.data[userId].map((item: any) => {
        if ("Accessories COG" in item || "Accessories T/Over" in item) {
          map["accessories"] = [
            { name: "Accessories T/Over", value: item["Accessories T/Over"] },
            { name: "Accessories COG", value: item["Accessories COG"] },
          ];
        }
        if ("Bags COG" in item || "Bags T/O" in item) {
          map["bags"] = [
            { name: "Bags T/O", value: item["Bags T/O"] },
            { name: "Bags COG", value: item["Bags COG"] },
          ];
        }
        if ("Balls COG" in item || "Balls T/O" in item) {
          map["balls"] = [
            { name: "Accessories T/Over", value: item["Accessories T/Over"] },
            { name: "Accessories COG", value: item["Accessories COG"] },
          ];
        }
        if ("Buggies COG" in item || "Buggies T/O" in item) {
          map["buggies"] = [
            { name: "Accessories T/Over", value: item["Accessories T/Over"] },
            { name: "Accessories COG", value: item["Accessories COG"] },
          ];
        }
        if ("Clothing COG" in item || "Clothing T/O" in item) {
          map["clothing"] = [
            { name: "Clothing T/O", value: item["Clothing T/O"] },
            { name: "Clothing COG", value: item["Clothing COG"] },
          ];
        }
        if ("Clubs COG" in item || "Clubs T/O" in item) {
          map["clubs"] = [
            { name: "Clubs T/O", value: item["Clubs T/O"] },
            { name: "Clubs COG", value: item["Clubs COG"] },
          ];
        }
      });
      console.log(map.accessories);
      setChartData(map);
    };
    search();
  }, []);

  return (
    <>
      <div className="chart">
        <p>Accessories</p>
        <StraightAnglePieChart map={chartData.accessories} />
        <SimpleBarChart />
      </div>
      <div className="chart">
        <p>Bags</p>
        <StraightAnglePieChart map={chartData.bags} />
      </div>
      <div className="chart">
        <p>Balls</p>
        <StraightAnglePieChart map={chartData.balls} />
      </div>
      <div className="chart">
        <p>Buggies</p>
        <StraightAnglePieChart map={chartData.buggies} />
      </div>
      <div className="chart">
        <p>Clothing</p>
        <StraightAnglePieChart map={chartData.clothing} />
      </div>
      <div className="chart">
        <p>Clubs</p>
        <StraightAnglePieChart map={chartData.clubs} />
      </div>
    </>
  );
};
export default ChartUI;
