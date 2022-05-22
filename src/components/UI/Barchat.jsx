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
  // import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
//   const dataLinks = [1,2,3,4,5,6,7,8,8,9,0,10,11,22,33,44,]
                                                                                                                                                                                                                                                                            
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
      <Bar options={options} height={`230%`} data={data} />
    );
  }
  export default Chart