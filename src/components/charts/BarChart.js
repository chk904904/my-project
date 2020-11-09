import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default function BarChart() {
  return (
    <ReactEcharts
      style={{ height: 300, marginBottom: 150 }}
      option={{
        legend: {
          data: ['White Girls', 'Black Girls'],
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
          data: ['National', 'Allegheny County'],
        },
        series: [
          {
            name: 'White Girls',
            type: 'bar',
            data: [13, 4.5],
            color: '#000',
          },
          {
            name: 'Black Girls',
            type: 'bar',
            data: [32.5, 45],
            color: '#4f0dd2',
            // label: {
            //   show: true,
            //   position: 'insideRight',
            //   fontSize: 20,
            // },
          },
        ],
      }}
    />
  );
}
