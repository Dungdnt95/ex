export interface DataFromExeclReality {
    "Accessories COG"?: number;
    "Accessories T/Over"?: number;
    "Bags COG"?: number;
    "Bags T/O"?: number;
    "Balls COG"?: number;
    "Balls T/O"?: number;
    "Buggies T/O"?: number;
    "Buggies COG"?: number;
    "Clothing T/O"?: number;
    "Clothing COG"?: number;
    "Clubs COG"?: number;
    "Clubs T/O"?: number;
    "Quarter"?: string;
    "Year"?: string | number;
}
export interface DataFromExeclTarget {
    "Accessories"?: number;
    "Bags"?: number;
    "Balls"?: number;
    "Buggies"?: number;
    "Clothing"?: number;
    "Clubs"?: number;
    "Quarter"?: string;
    "Year"?: string | number;
}
export interface DataFromExecl {
    [key: string]: [
        DataFromExeclReality,
        DataFromExeclTarget
    ];
}

export interface PieChartData {
    [key: string]: PieChart[]
}

export interface PieChart {
    name: string;
    value: number;
}

