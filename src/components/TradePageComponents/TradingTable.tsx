import React, { useEffect, useState } from "react";

import GraphData from "./GraphData";

import Table from "./Table";
interface Props {
  watchList: string[];
  setWatchList: React.Dispatch<React.SetStateAction<string[]>>;
  setChartItem: React.Dispatch<React.SetStateAction<string>>;
  chartItem: string;
}
interface Response {
  data: {
    c: number;
    d: number;
    h: number;
    dp: number;
    l: number;
    o: number;
    pc: number;
    t: number;
  };
  symbol: string;
}

const TradingTable = ({
  watchList,
  setWatchList,
  setChartItem,
  chartItem,
}: Props) => {
  const [stock, setStock] = useState<Response[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      
      try {
        const responses: Response[] = await Promise.all(
          watchList.map(async (stock) => {
            const response = await fetch(
              `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${
                import.meta.env.VITE_FINNHUB_API_KEY
            }`
            );
            const data = await response.json();
           
            return {
              data: data,
              symbol: stock,
            };
          })
        );
        if (isMounted) {
          //free lan hence we wont get all responses
          setStock(responses.filter((item: any) => !item.data.error));
         
        }
      } catch (error: any) {
        console.group(error);
      }
    
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [watchList]);

  const handleDelete = (id: string) => {
  
    const newWatchList = watchList.filter((item) => item !== id);
    console.log(watchList)
    setWatchList(newWatchList);
    localStorage.setItem("watchList", JSON.stringify(newWatchList))
  };

  return (
    <>
      <Table
        stock={stock}
        setChartItem={setChartItem}
        chartItem={chartItem}
        handleDelete={handleDelete}
      />

      <GraphData chartItem={chartItem} />
    </>
  );
};

export default TradingTable;
