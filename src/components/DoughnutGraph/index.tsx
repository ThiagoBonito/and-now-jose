import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutProps = {
  finishedClasses: number;
  totalClasses: number;
};

export const DoughnutGraph = ({
  finishedClasses,
  totalClasses,
}: DoughnutProps) => {
  const data = {
    labels: ["Conclúidas", "Faltantes"],
    datasets: [
      {
        data: [finishedClasses, totalClasses - finishedClasses],
        backgroundColor: ["#FFF", "#ABB1BA"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 16px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `${data.datasets[0].data[0]}/${
          Number(data.datasets[0].data[0]) + Number(data.datasets[0].data[1])
        }`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        cutout: 35,
        animation: {
          animateRotate: true,
          duration: 2000,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
      plugins={[textCenter]}
    />
  );
};
