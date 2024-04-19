import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  GridLineOptions,
  ActiveElement,
  ActiveDataPoint,
  BorderOptions,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as C from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  maintainAspectRatio: false,
  stacked: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      labels: {
        usePointStyle: true,
      }
    },
  },
  elements: {
    line: {
      tension: 0,
    },
  },

  scales: {
    y: {
      id: 'cashFlow',
      type: 'linear' as const,
      display: true,
      Chart: {
        display: false,
      },
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: false,
      gridLines: {
        display: false,
      },
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};


const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Receitas',
      data: [500, 400, 600, 100, 800, 20, 300],
      fill: true,
      backgroundColor: '#0099ff',
      drawActiveElementsOnTop: false,
      borderColor: '#0099ff',
      borderWidth: 2,
      yAxisID: 'cashFlow',
    },
    {
      label: 'Despesas',
      drawActiveElementsOnTop: true,
      data: [100, 200, 250, 500, 1000, 600, 300],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 2,
      yAxisID: 'cashFlow',
    },
  ],
};

export interface ChartProps { }

export default function Chart() {
  //@ts-ignore
  return <Line options={options} data={data} height={250} width={500} />;
}