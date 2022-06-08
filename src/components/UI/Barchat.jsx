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
        label: 'Orders',
        data: [40,20,120,40,60,30,70],
        backgroundColor: '#8fd9e4',
      },

      {
        label: 'Menu',
        data: [50,30,110,30,70,30,70],
        backgroundColor: '#66ff66',

      },

      {
        label: 'Clients',
        data: [60,40,100,20,80,30,70],
        backgroundColor: '#00ff99',

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