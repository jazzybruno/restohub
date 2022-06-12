

import React from 'react' 
import { Line } from 'react-chartjs-2'
import {} from 'chart.js/auto'

const options = {
    scales: {
        y: {
            ticks: {
                color: 'black',
                font: {
                    size: 18,
                }
            },
            grid: {
                color: 'black'
            }
        },
        x:{
            ticks: {
                color: 'black',
                font: {
                    size: 18
                }
            }
        }
    },
}

const data = (canvas) => {
    const ctx = canvas.getContext('2d')
    const redbackgroundGradient = ctx.createLinearGradient(0, 0, 0, 500);
    
    redbackgroundGradient.addColorStop(0, 'rgba(179, 193, 15, 0.76)');
    redbackgroundGradient.addColorStop(0.5, 'rgba(179, 193, 15, 0.76)');

    let chartdata = {
        labels: ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'august'],
        datasets: [
            {
                label: 'Clients Trend',
                data: [10 , 15 , 20 , 15 , 30 , 35 , 40 , 45 , 50  ],
                fill: true,
                backgroundColor: redbackgroundGradient,
                pointRadius: 5,
                pointBorderWidth: 2,
                tension: 0.4
            }
        ]
    }

    return (
        <Line data={chartdata} options={options} width={1000} height={500}  ></Line>
    )
}

export default function Chart() {
    return(
        <div>
            {data(document.createElement('canvas'))}
        </div>
    )
}
