import { DataFromExecl, DataFromExeclReality, PieChartData } from '../types'
const mappingData = (params: DataFromExecl,keyName:string) => {
    try {
        let userId = 1;
        let mapPieChart: PieChartData = {};
        //cot 1
        let accessories = 0;
        let bags = 0;
        let balls = 0;
        let buggies = 0;
        let clothing = 0;
        let clubs = 0;

        //cot 3
        let accessoriesCompare = 0;
        let bagsCompare = 0;
        let ballsCompare = 0;
        let buggiesCompare = 0;
        let clothingCompare = 0;
        let clubsCompare = 0;

        //cot 2
        let accessoriesMedium = 0;
        let bagsMedium = 0;
        let ballsMedium = 0;
        let buggiesMedium = 0;
        let clothingMedium = 0;
        let clubsMedium = 0;

        //cot 4
        let accessoriesCompareMedium = 0;
        let bagsCompareMedium = 0;
        let ballsCompareMedium = 0;
        let buggiesCompareMedium = 0;
        let clothingCompareMedium = 0;
        let clubsCompareMedium = 0;

        params[userId].map((item: DataFromExeclReality) => {
            if (item["Accessories T/Over"] && item["Accessories COG"]) {
                accessories = item["Accessories T/Over"];
                accessoriesCompare =
                    item["Accessories T/Over"] - item["Accessories COG"];
                mapPieChart["accessories"] = [
                    { name: "Accessories T/Over", value: item["Accessories T/Over"] },
                    { name: "Accessories COG", value: item["Accessories COG"] },
                ];
            }

            if (item["Bags T/O"] && item["Bags COG"]) {
                bags = item["Bags T/O"];
                accessoriesCompare = item["Bags T/O"] - item["Bags COG"];
                mapPieChart["bags"] = [
                    { name: "Bags T/O", value: item["Bags T/O"] },
                    { name: "Bags COG", value: item["Bags COG"] },
                ];
            }
            if (item["Balls T/O"] && item["Balls COG"]) {
                balls = item["Balls COG"];
                ballsCompare = item["Balls COG"] - item["Balls COG"];
                mapPieChart["balls"] = [
                    { name: "Balls T/O", value: item["Balls T/O"] },
                    { name: "Balls COG", value: item["Balls COG"] },
                ];
            }
            if (item["Buggies T/O"] && item["Buggies COG"]) {
                buggies = item["Buggies T/O"];
                buggiesCompare = item["Buggies T/O"] - item["Buggies COG"];
                mapPieChart["buggies"] = [
                    { name: "Buggies T/O", value: item["Buggies T/O"] },
                    { name: "Buggies COG", value: item["Buggies COG"] },
                ];
            }
            if (item["Clothing T/O"] && item["Clothing COG"]) {
                clothing = item["Clothing T/O"];
                clothingCompare = item["Clothing T/O"] - item["Clothing COG"];
                mapPieChart["clothing"] = [
                    { name: "Clothing T/O", value: item["Clothing T/O"] },
                    { name: "Clothing COG", value: item["Clothing COG"] },
                ];
            }
            if (item["Clubs T/O"] && item["Clubs COG"]) {
                clubs = item["Clubs T/O"];
                clubsCompare = item["Clubs T/O"] - item["Clubs COG"];
                mapPieChart["clubs"] = [
                    { name: "Clubs T/O", value: item["Clubs T/O"] },
                    { name: "Clubs COG", value: item["Clubs COG"] },
                ];
            }
        });

        const propertyValues = Object.values(params);
        const length = propertyValues.length;
        propertyValues.map((item: any) => {
            item.map((e: DataFromExeclReality) => {
                if (e["Accessories T/Over"]) {
                    accessoriesMedium += e["Accessories T/Over"];
                    accessoriesCompareMedium +=
                        e["Accessories T/Over"] - e["Accessories T/Over"];
                }
                if (e["Bags T/O"] && e["Bags COG"]) {
                    bagsMedium += e["Bags T/O"];
                    bagsCompareMedium += e["Bags T/O"] - e["Bags COG"];
                }
                if (e["Balls T/O"] && e["Balls COG"]) {
                    ballsMedium += e["Balls T/O"];
                    ballsCompareMedium += e["Balls T/O"] - e["Balls COG"];
                }
                if (e["Buggies T/O"] && e["Buggies COG"]) {
                    buggiesMedium += e["Buggies T/O"];
                    buggiesCompareMedium += e["Buggies T/O"] - e["Buggies COG"];
                }
                if (e["Clothing T/O"] && e["Clothing COG"]) {
                    clothingMedium += e["Clothing T/O"];
                    clothingCompareMedium +=
                        e["Clothing T/O"] - e["Clothing COG"];
                }
                if (e["Clubs T/O"] && e["Clubs COG"]) {
                    clubsMedium += e["Clubs T/O"];
                    clubsCompareMedium += e["Clubs T/O"] - e["Clubs COG"];
                }
            });
        });
        let mapBarChart = {
            accessories: [
                {
                    name: "Turn Over",
                    [keyName]: accessories,
                    Average: accessoriesMedium / length,
                },
                {
                    name: "Margin",
                    [keyName]: Math.abs(accessoriesCompare),
                    Average: Math.abs(accessoriesCompareMedium) / length,
                },
            ],
            bags: [
                {
                    name: "Turn Over",
                    [keyName]: bags,
                    Average: bagsMedium / length,
                },
                {
                    name: "Margin",
                    [keyName]: Math.abs(bagsCompare),
                    Average: Math.abs(bagsCompareMedium) / length,
                },
            ],
            balls: [
                {
                    name: "Turn Over",
                    [keyName]: balls,
                    Average: ballsMedium / length,
                },
                {
                    name: "Margin",
                    [keyName]: Math.abs(ballsCompare),
                    Average: Math.abs(ballsCompareMedium) / length,
                },
            ],
            buggies: [
                {
                    name: "Turn Over",
                    [keyName]: buggies,
                    Average: buggiesMedium / length,
                },
                {
                    name: "Margin",
                    [keyName]: Math.abs(buggiesCompare),
                    Average: Math.abs(buggiesCompareMedium) / length,
                },
            ],
            clothing: [
                {
                    name: "Turn Over",
                    [keyName]: clothing,
                    Average: clothingMedium / length,
                },
                {
                    name: "Margin",
                    [keyName]: Math.abs(clothingCompare),
                    Average: Math.abs(clothingCompareMedium) / length,
                },
            ],
            clubs: [
                {
                    name: "Turn Over",
                    [keyName]: clubs,
                    Average: clubsMedium / length,
                },
                {
                    name: "Margin",
                    [keyName]: Math.abs(clubsCompare),
                    Average: Math.abs(clubsCompareMedium) / length,
                },
            ],
        };
        return { mapPieChart, mapBarChart }
    } catch (error: any) {
        console.log(`mappingData has error: ${error.message}`)
    }
}
export { mappingData }