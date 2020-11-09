import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default function BarChartBully() {
  return (
    <ReactEcharts
      style={{ height: 300, marginBottom: 150 }}
      option={{
        legend: {
          data: ['Proportion of enrolled students', 'Proportion of students reported as harassed or bullied'],
          top: 0,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: 'category',
          data: ['Black', 'Two or more races', 'Asian', 'Hspanice or Latino', 'White'].reverse(),
        },
        series: [
          {
            name: 'Proportion of enrolled students',
            type: 'bar',
            data: [15, 3, 6, 26, 49].reverse(),
            color: '#000',
          },
          {
            name: 'Proportion of students reported as harassed or bullied',
            type: 'bar',
            data: [35, 6, 6, 20, 28].reverse(),
            color: '#4f0dd2',
          },
        ],
      }}
    />
  );
}
