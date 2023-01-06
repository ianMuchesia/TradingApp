import React, { useEffect, useState } from "react";
import SearchItem from "./SearchItem";
interface Props {
  addToWatchList: (stock: string) => void;
}

const InputData = ({ addToWatchList }: Props) => {
  const [search, setSearch] = useState("");
 

  //results from the search
  const [results, setResults] = useState<[]>([]);

  //dropdown appears on search

  useEffect(() => {
    let isMounted = true;

    const fetchResults = async () => {
      try {
        const params = new URLSearchParams();
        params.append("q", search);
        params.append("token", import.meta.env.VITE_FINNHUB_API_KEY);
        const response = await fetch(
          `https://finnhub.io/api/v1/search?${params}`,
          {
            method: "GET",
          }
        );
        const { result } = await response.json();
        if (isMounted) {
          setResults(result);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    if (search.length > 0) {
      fetchResults();
    }
    return () => {
      isMounted = false;
    };
  }, [search]);

 
  return (
    <div className="">
      <div className="grid place-items-center ">
        <input
          id="search"
          type="text"
          placeholder="search"
          className="border-2 p-2 rounded-lg text-gray-100"
          style={{ backgroundColor: "rgba(145,158,171,0.04" }}
          //autoComplete="off"
          onChange={(e) => {
            setSearch(e.target.value);
            
          }}
        />

       
          <ul
            className={`${search?"":"hidden"} h-[500px] overflow-y-scroll overflow-x-hidden cursor-pointer text-gray-100`}
          >
            {results.map((result, index) => {
              return (
                <SearchItem
                  key={index}
                  result={result}
                  addToWatchList={addToWatchList}
                  setSearch={setSearch}
                 
                />
              );
            })}
          </ul>
        
      </div>
    </div>
  );
};

export default InputData;
