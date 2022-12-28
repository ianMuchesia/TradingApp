import React, {useState} from 'react'
import Chart from "react-apexcharts"
interface Props{
  chartData:any;
  timeFormat: string;
  setTimeFormat: React.Dispatch<React.SetStateAction<string>>;
  chartItem: string;
}
const styles ={
  button:`py-2 md:py-4 w-24 text-gray-100 border-2  border-gray-200 hover:text-black hover:bg-gray-200 rounded-lg`
}




const Graph = ({chartData, setTimeFormat, timeFormat, chartItem}: Props) => {
  const { data } = chartData
  
 const color =data !== undefined ? (data[data.length -1].y - data[0].y) > 0 ? "#26C281" : "#ed3419" : "#26C281"

  const options: any ={
    colors: [color],
    title:{
      text: chartItem ,
      align: "center",
      style:{
        fontSize: "24px",
        color: "#D3D3D3",
      }
    },
    chart:{
      id: "stock data",
      animations:{
        speed: 1300
      }
    },
    xaxis:{
      type:"datetime",
      labels:{
        datetimeUTC: false,
        style:{
          colors:"#D3D3D3",
        }
      }
    },
    yaxis:{
      labels:{
        style:{
          colors:"#D3D3D3",
        }
      }
    },
    tooltip:{
      x:{
        format:"MMM dd HH:MM"
      }
    }
  }

  const series =[{
    name: chartItem,
    data: data !== undefined? data : [],
  }]
  const renderButtonSelect =(btn: string)=>{

    if (btn == timeFormat){
       return styles.button + " bg-red-800 text-white"
    }else{
       return styles.button;
    }
}
  
  return (
    <div style={{backgroundColor: "rgba(145,158,171,0.04)"}} className="my-5 p-4 shadow-sm ">
    <Chart options={options} series={series} type="area" width= "100%"/>
    <div className="flex  gap-4">
        <button onClick={()=>setTimeFormat("oneDay")} className={renderButtonSelect('oneDay')}>One Day</button>
        <button onClick={()=>setTimeFormat("oneWeek")}  className={renderButtonSelect('oneWeek')}>One Week</button>
        <button onClick={()=>setTimeFormat("oneYear")} className={renderButtonSelect('oneYear')}>One Year</button>
    </div>
    
</div>
  )
}

export default Graph