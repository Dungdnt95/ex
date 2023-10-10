import React, { useEffect, useState } from "react";
import axios from "axios";
import StraightAnglePieChart from "./StraightAnglePieChart";
import SimpleBarChart from "./SimpleBarChart";
const ChartUI = () => {
  const [chartData, setChartData] = useState<any>({});
  const [tunr, setRurn] = useState<any>({});
  useEffect(() => {
    const search = async () => {
      let params = { userId: 1, q: "Q1", year: "2023" };

      const result = await axios.get("http://localhost:3001/search", {
        params,
      });
      let userId = 1;
      let map = {};

      //cot 1
      let tasmaniaAccessories = 0;
      let tasmaniaBags = 0;
      let tasmaniaBalls = 0;
      let tasmaniaBuggies = 0;
      let tasmaniaClothing = 0;
      let tasmaniaClubs = 0;

      //cot 3
      let tasmaniaAccessoriesCompare = 0;
      let tasmaniaBagsCompare = 0;
      let tasmaniaBallsCompare = 0;
      let tasmaniaBuggiesCompare = 0;
      let tasmaniaClothingCompare = 0;
      let tasmaniaClubsCompare = 0;
      result.data.data[userId].map((item: any) => {
        if ("Accessories COG" in item || "Accessories T/Over" in item) {
          tasmaniaAccessories = item["Accessories T/Over"];
          tasmaniaAccessoriesCompare =
            item["Accessories T/Over"] - item["Accessories COG"];
          map["accessories"] = [
            { name: "Accessories T/Over", value: item["Accessories T/Over"] },
            { name: "Accessories COG", value: item["Accessories COG"] },
          ];
        }
        if ("Bags COG" in item || "Bags T/O" in item) {
          tasmaniaBags = item["Bags T/O"];
          tasmaniaAccessoriesCompare = item["Bags T/O"] - item["Bags COG"];
          map["bags"] = [
            { name: "Bags T/O", value: item["Bags T/O"] },
            { name: "Bags COG", value: item["Bags COG"] },
          ];
        }
        if ("Balls COG" in item || "Balls T/O" in item) {
          tasmaniaBalls = item["Balls COG"];
          tasmaniaBallsCompare = item["Balls COG"] - item["Balls COG"];
          map["balls"] = [
            { name: "Balls T/O", value: item["Balls T/O"] },
            { name: "Balls COG", value: item["Balls COG"] },
          ];
        }
        if ("Buggies COG" in item || "Buggies T/O" in item) {
          tasmaniaBuggies = item["Buggies T/O"];
          tasmaniaBuggiesCompare = item["Buggies T/O"] - item["Buggies COG"];
          map["buggies"] = [
            { name: "Buggies T/O", value: item["Buggies T/O"] },
            { name: "Buggies COG", value: item["Buggies COG"] },
          ];
        }
        if ("Clothing COG" in item || "Clothing T/O" in item) {
          tasmaniaClothing = item["Clothing T/O"];
          tasmaniaClothingCompare = item["Clothing T/O"] - item["Clothing COG"];
          map["clothing"] = [
            { name: "Clothing T/O", value: item["Clothing T/O"] },
            { name: "Clothing COG", value: item["Clothing COG"] },
          ];
        }
        if ("Clubs COG" in item || "Clubs T/O" in item) {
          tasmaniaClubs = item["Clubs T/O"];
          tasmaniaClubsCompare = item["Clubs T/O"] - item["Clubs COG"];
          map["clubs"] = [
            { name: "Clubs T/O", value: item["Clubs T/O"] },
            { name: "Clubs COG", value: item["Clubs COG"] },
          ];
        }
      });
      setChartData(map);

      //cot 2
      let tasmaniaAccessoriesMedium = 0;
      let tasmaniaBagsMedium = 0;
      let tasmaniaBallsMedium = 0;
      let tasmaniaBuggiesMedium = 0;
      let tasmaniaClothingMedium = 0;
      let tasmaniaClubsMedium = 0;

      //cot 4
      let tasmaniaAccessoriesCompareMedium = 0;
      let tasmaniaBagsCompareMedium = 0;
      let tasmaniaBallsCompareMedium = 0;
      let tasmaniaBuggiesCompareMedium = 0;
      let tasmaniaClothingCompareMedium = 0;
      let tasmaniaClubsCompareMedium = 0;

      const propertyValues = Object.values(result.data.data);
      const length = propertyValues.length;
      propertyValues.map((item: any) => {
        item.map((e: any) => {
          if (e["Accessories T/Over"]) {
            tasmaniaAccessoriesMedium += e["Accessories T/Over"];
            tasmaniaAccessoriesCompareMedium +=
              e["Accessories T/Over"] - e["Accessories T/Over"];
          }
          if (e["Bags T/O"]) {
            tasmaniaBagsMedium += e["Bags T/O"];
            tasmaniaBagsCompareMedium += e["Bags T/O"] - e["Bags COG"];
          }
          if (e["Balls T/O"]) {
            tasmaniaBallsMedium += e["Balls T/O"];
            tasmaniaBallsCompareMedium += e["Balls T/O"] - e["Balls COG"];
          }
          if (e["Buggies T/O"]) {
            tasmaniaBuggiesMedium += e["Buggies T/O"];
            tasmaniaBuggiesCompareMedium += e["Buggies T/O"] - e["Buggies COG"];
          }
          if (e["Clothing T/O"]) {
            tasmaniaClothingMedium += e["Clothing T/O"];
            tasmaniaClothingCompareMedium +=
              e["Clothing T/O"] - e["Clothing COG"];
          }
          if (e["Clubs T/O"]) {
            tasmaniaClubsMedium += e["Clubs T/O"];
            tasmaniaClubsCompareMedium += e["Clubs T/O"] - e["Clubs COG"];
          }
        });
      });
      let mapBarChart = {
        accessories: [
          {
            name: "Turn Over",
            Tasmania: tasmaniaAccessories,
            Average: tasmaniaAccessoriesMedium / length,
          },
          {
            name: "Margin",
            Tasmania: Math.abs(tasmaniaAccessoriesCompare),
            Average: Math.abs(tasmaniaAccessoriesCompareMedium) / length,
          },
        ],
        bags: [
          {
            name: "Turn Over",
            Tasmania: tasmaniaBags,
            Average: tasmaniaBagsMedium / length,
          },
          {
            name: "Margin",
            Tasmania: Math.abs(tasmaniaBagsCompare),
            Average: Math.abs(tasmaniaBagsCompareMedium) / length,
          },
        ],
        balls: [
          {
            name: "Turn Over",
            Tasmania: tasmaniaBalls,
            Average: tasmaniaBallsMedium / length,
          },
          {
            name: "Margin",
            Tasmania: Math.abs(tasmaniaBallsCompare),
            Average: Math.abs(tasmaniaBallsCompareMedium) / length,
          },
        ],
        buggies: [
          {
            name: "Turn Over",
            Tasmania: tasmaniaBuggies,
            Average: tasmaniaBuggiesMedium / length,
          },
          {
            name: "Margin",
            Tasmania: Math.abs(tasmaniaBuggiesCompare),
            Average: Math.abs(tasmaniaBuggiesCompareMedium) / length,
          },
        ],
        clothing: [
          {
            name: "Turn Over",
            Tasmania: tasmaniaClothing,
            Average: tasmaniaClothingMedium / length,
          },
          {
            name: "Margin",
            Tasmania: Math.abs(tasmaniaClothingCompare),
            Average: Math.abs(tasmaniaClothingCompareMedium) / length,
          },
        ],
        clubs: [
          {
            name: "Turn Over",
            Tasmania: tasmaniaClubs,
            Average: tasmaniaClubsMedium / length,
          },
          {
            name: "Margin",
            Tasmania: Math.abs(tasmaniaClubsCompare),
            Average: Math.abs(tasmaniaClubsCompareMedium) / length,
          },
        ],
      };
      setRurn(mapBarChart)
      console.log(mapBarChart);
    };
    search();
  }, []);

  return (
    <>
      <div className="chart">
        <p>Accessories</p>
        <StraightAnglePieChart data={chartData.accessories} />
        <SimpleBarChart data={tunr.accessories} />
      </div>
      <div className="chart">
        <p>Bags</p>
        <StraightAnglePieChart data={chartData.bags} />
        <SimpleBarChart data={tunr.bags} />
      </div>
      <div className="chart">
        <p>Balls</p>
        <StraightAnglePieChart data={chartData.balls} />
        <SimpleBarChart data={tunr.balls} />
      </div>
      <div className="chart">
        <p>Buggies</p>
        <StraightAnglePieChart data={chartData.buggies} />
        <SimpleBarChart data={tunr.buggies} />
      </div>
      <div className="chart">
        <p>Clothing</p>
        <StraightAnglePieChart data={chartData.clothing} />
        <SimpleBarChart data={tunr.clothing} />
      </div>
      <div className="chart">
        <p>Clubs</p>
        <StraightAnglePieChart data={chartData.clubs} />
        <SimpleBarChart data={tunr.clubs} />
      </div>
    </>
  );
};
export default ChartUI;
