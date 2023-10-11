import { useEffect, useState } from "react";
import axios from "axios";
import StraightAnglePieChart from "./StraightAnglePieChart";
import SimpleBarChart from "./SimpleBarChart";
import { mappingData } from "../ultis";
import { PieChartData } from "../types";
const ChartUI = () => {
  const [pieChartData, setPieChartData] = useState<PieChartData>({});
  const [barChartData, setBarChartData] = useState<any>({});
  const [keyName, setKeyName] = useState<string>("Kew");
  useEffect(() => {
    const search = async () => {
      let params = { userId: 1, q: "Q1", year: "2023" };

      const result = await axios.get("http://localhost:3001/search", {
        params,
      });
      const res: any = mappingData(result.data.data,keyName);
      setPieChartData(res.mapPieChart);
      setBarChartData(res.mapBarChart);
    };
    search();
  }, []);

  return (
    <>
      <div className="chart">
        <p>Accessories</p>
        <StraightAnglePieChart data={pieChartData.accessories} />
        <SimpleBarChart keyName={keyName}data={barChartData.accessories} />
      </div>
      <div className="chart">
        <p>Bags</p>
        <StraightAnglePieChart data={pieChartData.bags} />
        <SimpleBarChart keyName={keyName}data={barChartData.bags} />
      </div>
      <div className="chart">
        <p>Balls</p>
        <StraightAnglePieChart data={pieChartData.balls} />
        <SimpleBarChart keyName={keyName}data={barChartData.balls} />
      </div>
      <div className="chart">
        <p>Buggies</p>
        <StraightAnglePieChart data={pieChartData.buggies} />
        <SimpleBarChart keyName={keyName}data={barChartData.buggies} />
      </div>
      <div className="chart">
        <p>Clothing</p>
        <StraightAnglePieChart data={pieChartData.clothing} />
        <SimpleBarChart keyName={keyName}data={barChartData.clothing} />
      </div>
      <div className="chart">
        <p>Clubs</p>
        <StraightAnglePieChart data={pieChartData.clubs} />
        <SimpleBarChart keyName={keyName}data={barChartData.clubs} />
      </div>
    </>
  );
};
export default ChartUI;
