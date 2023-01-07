import React from "react";
import { MdDeleteOutline } from "react-icons/md";
interface Props {
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
  setChartItem: React.Dispatch<React.SetStateAction<string>>;
  chartItem: string;
  handleDelete: (id: string) => void;
}

const SingleRowItem = ({
  data,
  symbol,
  setChartItem,
  chartItem,
  handleDelete,
}: Props) => {
  
  return (
    <tr
      className={`border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 cursor-pointer md:text-lg ${
        chartItem == symbol ? "text-red-400" : ""
      }`}
      key={symbol}
      onClick={() => {
        
        setChartItem(symbol);
        localStorage.setItem("chartItem", JSON.stringify(symbol));
      }}
    >
      <td className="p-3">
        <p>{symbol}</p>
      </td>
      <td className="p-3">
        <p>{data.c}</p>
      </td>
      <td className="p-3">
        <p>{data.d}</p>
      </td>
      <td className="p-3">
        <p className="dark:text-gray-400">{data.dp}</p>
      </td>
      <td className="p-3">
        <p>{data.h}</p>
      </td>
      <td className="p-3">
        <p className="dark:text-gray-400">{data.l}</p>
      </td>

      <td className="p-3">
        <p>{data.o}</p>
      </td>
      <td className="p-3">
        <p>{data.pc}</p>
      </td>
      <td
        className="p-3 "
        onClick={(e) => {
          e.stopPropagation();
          console.log("here")
          handleDelete(symbol);
        }}
      >
        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
          <span className="text-gray-100 hover:text-red-900">
            <MdDeleteOutline size={30} />
          </span>
        </span>
      </td>
    </tr>
  );
};

export default SingleRowItem;
