"use client";

import React from "react";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type ChartProps = {
  chartData: any;
};

interface TransformedData {
  x: string;
  y: number;
}

export default function Chart({ chartData }: ChartProps) {
  /*const dataSeries: TransformedData[] = Object.entries(
    chartData["Weekly Time Series"]
  )
    .slice(0, 260)
    .map(([date, { "": close }]) => ({
      x: new Date(date).toLocaleDateString("en-US"),
      y: parseFloat(close),
    }));

  const options = {
    type: "line",
    xaxis: {
      tickAmount: 5,
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
  };

  const series = [
    {
      name: chartData["Meta Data"]["2. Symbol"],
      data: dataSeries.reverse(),
    },
  ];

  return (
    <div className="pt-4 text-black text-lg">
      <ApexChart
        type="line"
        options={options}
        series={series}
        width={"100%"}
        height={"auto"}
      />
    </div>
  );*/
}
