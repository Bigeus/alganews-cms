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
import styled from 'styled-components';
import { transparentize } from 'polished';
import Heading from '../Typography/Heading';

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

export const options: Chart.ChartOptions = {
  responsive: false,
  maintainAspectRatio: true,
  interaction: {
    mode: 'index',
    intersect: true,
  },
  stacked: false,
  gridLines: {
    display: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'Título',
    },
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
    //@ts-ignore
    y1: {
      id: 'cashFlow',
      type: 'linear',
      display: true,
      Chart: {
        display: false,
      },
      position: "left",
      gridLines: {
        display: false,
      },
    },
    /*   y1: {
        type: 'linear',
        display: false,
        gridLines: {
          display: false,
        },
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      }, */
  },
}


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
      data: [100, 200, 250, 500, 1000, 600, 300],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 2,
      yAxisID: 'cashFlow',
    },
  ],
};

export interface ChartProps { data: Chart.ChartData, title: string }

export default function Chart({ data, title }: ChartProps) {
  //@ts-ignore
  return <ChartWrapper>
    <div style={{ marginBottom: 16 }}>
      <Heading level={3}>
        {title}
      </Heading>
    </div>
    {/* @ts-ignore */}
    <Line options={options} data={data} height={250} width={500} title='teste' />
  </ChartWrapper>
}
const ChartWrapper = styled.div`
  text-align: center;
  border: 1px solid ${transparentize(0.9, '#274060')};
  padding: 20px;
`