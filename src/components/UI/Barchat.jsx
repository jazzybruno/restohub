import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

                                                                                                                                                                                                                                                                            
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: 'Char name',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [

      {
        label: 'Dataset 2',
        data: [50,20,120,40,80,30,70],
        backgroundColor: '#b3c10f',
      },
    ],
  }
 function Chart() {
    return( 
      <div>

        <Bar options={options} height={`230%`} data={data}  />
      </div>
    );
  }
  export default Chart