import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default function BarChartSuspension() {
    return (
        <ReactEcharts
            style={{ height: 300, }}
            option={{

                // tooltip: {
                //     trigger: 'axis'
                // },
                legend: {
                    data: ['White Girls', 'White Girls with Disabilities', 'Black Girls', 'Black Girls with Disabilities']
                },

                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        // data: ['Allderdice', 'Brashear', 'CAPA', 'Carrick', 'Obama', 'Perry', 'Science & Technology', 'Westinghouse']
                        data: ['Allderdice', 'Brashear', 'CAPA', 'Carrick', 'Obama', 'Perry', 'S&T', 'Westing'],
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'White Girls',
                        type: 'bar',
                        data: [3, 18, 3, 8, 6, 36, 10, 0],
                        color: '#8153DA'

                    },
                    {
                        name: 'White Girls with Disabilities',
                        type: 'bar',
                        data: [0, 18, 0, 10, 50, 53, 50, 0],
                        color: '#6E37DA'

                    },
                    {
                        name: 'Black Girls',
                        type: 'bar',
                        data: [18, 42, 12, 33, 21, 46, 29, 58],
                        color: '#4f0dd2',

                    },
                    {
                        name: 'Black Girls with Disabilities',
                        type: 'bar',
                        data: [30, 52, 30, 22, 28, 42, 50, 48],
                        color: '#000',

                    },

                ]
            }}
        />
    );
}
