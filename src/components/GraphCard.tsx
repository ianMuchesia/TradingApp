import React from 'react'
import Chart from "react-apexcharts";

interface Props{
    name: string;
    data: {
        c:[],
        t:[],
    };
}

const GraphCard = ({name, data}:Props) => {


const state: any = {
    options: {
        title:{
            text: name,
            align: "left",
            style: {
                fontSize: "24px"
            }
        },
      chart: {
        id: "basic-bar",
        animations: {
            speed: 1300
        },
      },
      xaxis: {
        categories: data.t
      },
      tooltip:{
        x:{
            format: "MMM dd HH:MM"
        }
     },
    },
    series: [
      {
        name: "series-1",
        data: data.c
      }
    ]
  };

  return (
    <div className="border-2 border-gray-400 grid place-items-center">
          <Chart
              options={state.options}
              series={state.series}
              type="line"
              className="w-[300px] "
            />
    </div>
  )
}

export default GraphCard