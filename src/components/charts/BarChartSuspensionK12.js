import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default function BarChartSuspensionK12() {
    return (
        <ReactEcharts
            style={{ height: 300, }}
            option={{

                legend: {
                    data: ['% of enrollment', '% of In-School Suspensions', '% of Single Suspensions', '% of Multiple Suspensions']
                },

                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['Black Girls', 'White Girls'],
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '% of enrollment',
                        type: 'bar',
                        data: [15.6, 50.1],
                        color: '#8153DA'

                    },
                    {
                        name: '% of In-School Suspensions',
                        type: 'bar',
                        data: [36.6, 32.9],
                        color: '#6E37DA'

                    },
                    {
                        name: '% of Single Suspensions',
                        type: 'bar',
                        data: [41.6, 28.4],
                        color: '#4f0dd2',

                    },
                    {
                        name: '% of Multiple Suspensions',
                        type: 'bar',
                        data: [52.0, 22.7],
                        color: '#000',

                    },

                ]
            }}
        />
    );
}
