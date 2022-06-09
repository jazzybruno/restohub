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
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];
  
  export const data = {
    labels,
    datasets: [

      {
        label: 'Orders',
        data: [40,20,120,40,60,30,70 , 65 , 67 , 89 , 90 , 18],
        backgroundColor: '#b3c10f',
      },


      {
        label: 'Clients',
        data: [26,46,100,40,30,30,70 , 65 , 67 , 89 , 90 , 18],
        backgroundColor: '#b3c10f',

      },
    ],
  }
 function Chart() {
    return( 
      <div>

        <Bar options={options} height={`180%`} data={data}  />
      </div>
    );
  }
  export default Chart