import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import TradingTable from "../components/TradingTable"
import InputData from '../components/InputData'


interface Props{
    watchList: string[];
    setWatchList: React.Dispatch<React.SetStateAction<string[]>>;
}
const Trade = ({watchList , setWatchList}:Props) => {

    
	
    const addToWatchList=(stock:string)=>{
       if(watchList.includes(stock))return;
       setWatchList(prevList=>[...prevList, stock])

    }
  return (
    <div className='bg-[#031B34] '>
        <Navbar/>
        <InputData addToWatchList={addToWatchList}/>
        <TradingTable  watchList={watchList} setWatchList={setWatchList}/>
    </div>
  )

}

export default Trade