import React, { useEffect, useState } from "react";
import Chart from "./Graph";

interface Props {
  stock: Response[] | any;
  chartItem: string;
}
interface Data{
  data: any[];
}

const formatData = (data: any ) =>{
  return data.t.map((el:number,index:number)=>{
        return{
          x:el *1000,
          //we have to get the corresponding y value for the first item in the t array we want the first item in the c array. wherever the index we are on just grab the same we are on the c 
          y:Math.floor(data.c[index])

          //math floor added later to remove the decimal points
        }
  })
}

const GraphData = ({ stock, chartItem }: Props) => {
  const [timeFormat, setTimeFormat] = useState("oneDay");

  const [chartData, setChartData] = useState({});

  //stock market closes on friday
  const date: Date = new Date();

  const currentTime = Math.floor(date.getTime() / 1000);

  let oneDay: number;
  if (date.getDay() === 6) {
    //saturday
    oneDay = currentTime - 2 * 24 * 60 * 60;
  }
  //sunday
  else if (date.getDay() === 0) {
    oneDay = currentTime - 3 * 24 * 60 * 60;
  } else {
    //other days
    oneDay = currentTime - 24 * 60 * 60;
  }
  const oneWeek = currentTime - 7 * 24 * 60 * 60;
  const oneYear = currentTime - 24 * 60 * 60 * 365;

  const selectedDay = (timeFormat: string) => {
    if (timeFormat == "oneDay") {
      return `&resolution=${30}&from=${oneDay}&to=${currentTime}&token=ccq5kriad3i4o9irpul0ccq5kriad3i4o9irpulg
      `;
    } else if (timeFormat == "oneWeek") {
      return `&resolution=${60}&from=${oneWeek}&to=${currentTime}&token=ccq5kriad3i4o9irpul0ccq5kriad3i4o9irpulg
      `;
    } else {
      return `&resolution=W&from=${oneYear}&to=${currentTime}&token=ccq5kriad3i4o9irpul0ccq5kriad3i4o9irpulg
      `;
    }
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        
            const response = await fetch(
              `https://finnhub.io/api/v1/stock/candle?symbol=${
              chartItem
              }${selectedDay(timeFormat)}`
            );
            const data = await response.json();
            
       
        if (isMounted) {
          setChartData({
            data:formatData(data)
          })
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [timeFormat]);

  return (
    <div>
      <Chart chartData={chartData} setTimeFormat={setTimeFormat}
      timeFormat={timeFormat} chartItem={chartItem} />
    </div>
  );
};

export default GraphData;
