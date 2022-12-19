import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const { SERVER_URL } = process.env;

const LineChart = (props) => {
  const [lineLabels, setLineLabels] = useState([]);
  const [lineData, setLineData] = useState([]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    fetch(`${SERVER_URL}/linechart`)
      .then((serverResponse) => serverResponse.json())
      .then((serverResponseJson) => {
        setLineLabels(Object.keys(serverResponseJson));
        setLineData(Object.values(serverResponseJson));
      });
  }, []);

  const data = {
    labels: lineLabels,
    datasets: [
      {
        label: "My First Dataset",
        data: lineData,
        fill: false,
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(75, 192, 192)",
          "rgb(75, 192, 192)",
          "rgb(75, 192, 192)",
          "rgb(75, 192, 192)",
          "rgb(75, 192, 192)",
          "rgb(75, 192, 192)",
        ],
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="line-chart">
      <Line data={data} />
    </div>
  );
};

export default LineChart;
