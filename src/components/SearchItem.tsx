import React from 'react'
interface Props{
    result:{
      description: string;
      symbol: string; 
       
    },
    addToWatchList:(stock: string) => void;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchItem = ({result, addToWatchList, setSearch}:Props) => {

    const handleClick=()=>{
        addToWatchList(result.symbol);
        setSearch("")

    }

  return (
    <li  onClick={handleClick}>{result.description}{" "}({result.symbol})</li>
  )
}

export default SearchItem