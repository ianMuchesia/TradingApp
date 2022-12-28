import React, { useEffect, useState } from 'react'
import {MdDeleteOutline} from 'react-icons/md'
import GraphData from './GraphData';
interface Props{
	watchList:string[];
	setWatchList:React.Dispatch<React.SetStateAction<string[]>>;
	setChartItem: React.Dispatch<React.SetStateAction<string>>;
	chartItem:string;
}
interface Response{
	data: {
		c:number,
		d:number,
		h:number,
		dp:number,
		l:number,
		o:number,
		pc:number,
		t:number,
	};
	symbol: string;
}

const TradingTable = ({watchList, setWatchList , setChartItem , chartItem}:Props) => {

	
	const [stock , setStock ] = useState<Response[]>([])

	

	useEffect(()=>{
		let isMounted = true;
		const fetchData=async()=>{
			try{
				const responses: Response[] = await Promise.all(watchList.map(async (stock)=>{
				const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=ccq5kriad3i4o9irpul0ccq5kriad3i4o9irpulg
				`);
				const data = await response.json();
				return {
					data: data,
					symbol: stock,
				}
			}))
			if(isMounted){
				setStock(responses)
			}
		
		    }catch(error: any){
				console.group(error.message)
			}
		}
		fetchData()
		return ()=>{isMounted = false}
	},[watchList]) 


  return (
	<>

    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
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
				{stock.map(item=>{
					const {data} = item
					return(
						<tr className={`border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 cursor-pointer md:text-lg ${chartItem==item.symbol?"text-red-400": ""}` }key={item.symbol}>
					<td className="p-3" onClick={()=>{setChartItem(item.symbol)}}>
						<p>{item.symbol}</p>
					</td>
					<td className="p-3">
						<p>{data.c}</p>
					</td>
					<td className="p-3">
						<p >{data.d}</p>
						
						
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
					<td className="p-3 ">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span className='text-gray-100 hover:text-red-900'><MdDeleteOutline size={30}/></span>
						</span>
					</td>
				</tr>
					)
				})}
				
			</tbody>
		</table>
	</div>
</div>
<GraphData stock={stock} chartItem={chartItem}/>
</>
  )
}

export default TradingTable