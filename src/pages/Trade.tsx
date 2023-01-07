import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TradingTable from "../components/TradePageComponents/TradingTable";
import InputData from "../components/TradePageComponents/InputData";

interface Props {
  watchList: string[];
  setWatchList: React.Dispatch<React.SetStateAction<string[]>>;
}
const Trade = ({ watchList, setWatchList }: Props) => {
  const [chartItem, setChartItem] = useState(JSON.parse(localStorage.getItem('chartItem')||watchList[0]));

  const addToWatchList = (stock: string) => {
    if (watchList.includes(stock)) return;
    setWatchList([...watchList, stock]);
    localStorage.setItem("watchList",JSON.stringify([...watchList, stock]))
   
  };
 




  return (
    <div className="bg-[#031B34] ">
      <Navbar />
     
      <InputData addToWatchList={addToWatchList} />
      <TradingTable
        watchList={watchList}
        setWatchList={setWatchList}
        setChartItem={setChartItem}
        chartItem={chartItem}
      />
    </div>
  );
};

export default Trade;
