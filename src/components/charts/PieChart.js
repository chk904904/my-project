import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default function PieChart() {
  return (
    <ReactEcharts
      style={{ height: 500 }}
      option={{
        series: [
          {
            name: 'Source',
            type: 'pie',
            radius: '55%',
            center: ['50%', '40%'],
            color: ['#4F0DD2', '#6e37da', '#8153da', '#333333'],
            label: {
              fontSize: 20,
            },
            data: [
              { value: 29, name: 'Property (29%)' },
              { value: 26, name: 'Public Order (26%)' },
              { value: 33, name: 'Person (33%)' },
              { value: 12, name: 'Drugs (12%)' },
            ],
            itemStyle: {
              shadowBlur: 40,
              shadowOffsetX: 0,
              // vertical offset of shadow
              shadowOffsetY: 0,
              // shadow color
              shadowColor: 'rgba(0, 0, 0, 0.2)',
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 40,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      }}
    />
  );
}
