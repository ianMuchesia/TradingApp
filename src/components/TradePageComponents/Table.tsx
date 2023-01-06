import React from "react";
import SingleRowItem from "./SingleRowItem";
interface Props {
  stock: Response[];

  setChartItem: React.Dispatch<React.SetStateAction<string>>;
  chartItem: string;
  handleDelete: (id: string) => void;
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

const Table = ({ stock, chartItem, setChartItem, handleDelete }: Props) => {
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
    <div className="overflow-x-auto text-gray-100">
    <table className="min-w-full text-xs">
      <colgroup>
        {/* <col>
        <col>
        <col>
        <col>
        <col>
        <col className="w-24"> */}
      </colgroup>
      <thead className="dark:bg-gray-700">
        <tr className="text-left lg:underline md:text-lg">
          <th className="p-3">Symbol</th>
          <th className="p-3">Current Price</th>
          <th className="p-3">Change</th>
          <th className="p-3">Percent Change</th>
          <th className="p-3">High Price of the day</th>
          <th className="p-3">Low Price</th>
          <th className="p-3">Open Price</th>
          <th className="p-3">Previous close Price</th>
          <th className="p-3">Remove</th>
        </tr>
      </thead>
      <tbody>
        {stock.map((item:any) => {
          const { data, symbol } = item;
          return (
            <SingleRowItem
              key={symbol}
              data={data}
              symbol={symbol}
              setChartItem={setChartItem}
              chartItem={chartItem}
              handleDelete={handleDelete}
            />
          );
        })}
      </tbody>
    </table>
    </div>
    </div>
  );
};

export default Table;
