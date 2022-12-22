import React, { useState, useEffect } from "react";
import "./styles.css";
import PricingForm from "./CalculatorForm";



const Pricing = () => {
  const [currencyDetails, setCurrencyDetails] = useState({
    fromCurrency: "AED",
    toCurrency: "AED",
    amount:1,
  });
  const [result, setResult] = useState<number>(1);
  const [request, setRequest] = useState(false);
  const [list, setList ] = useState<[]>([])


  const handleChange = (event:  React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    const { value, name } = event.target;
    setCurrencyDetails((prevCurrencyDetails) => {
      return {
        ...prevCurrencyDetails,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCurrencyDetails(currencyDetails);
    setRequest((prevRequest) => !prevRequest);
  }; 



  useEffect(() => {
    let isMounted: boolean = true;
    const fetchData = async () : Promise<void>=> {
      try {
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        const responseList = await fetch(`https://openexchangerates.org/api/currencies.json?prettyprint=false&show_alternative=false&show_inactive=false&app_id=${import.meta.env.VITE_CURRENCY_API_KEY_LIST}`, options);
        const dataList = await responseList.json(); 

        const exchangeResponse = await fetch(`https://v6.exchangerate-api.com/v6/89e3de01604f12b2fc5912d3/pair/${currencyDetails.fromCurrency}/${currencyDetails.toCurrency}/${currencyDetails.amount}`)
        const exchangeData = await exchangeResponse.json()
        if (isMounted) {
         setResult(exchangeData.conversion_result);
         setList(dataList)
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [request]);

  //Note that in this version, I am using the Object.keys() method to get an array of the object's own enumerable properties, and then using the Array.prototype.map() method to create an array of <option> elements. This approach is more concise and easier to read than using a for...in loop.
  const currencyList = (list:string[], selectedOption:string, name: string) => (
    <select
      className="bg-purple-800 text-white text-lg p-2 rounded-lg m-1 w-[40%] truncate"
      value={selectedOption}
      onChange={handleChange}
      name={`${name}`}
    >
      {Object.keys(list).map((prop:any) => (
        <option value={prop} key={prop}>
          {prop}: {list[prop]}
        </option>
      ))}
    </select>
  ); 


  return (
    <div className="p-4  ">
      <PricingForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      currencyDetails={currencyDetails}
      currencyList={currencyList}
      list={list}
      result={result}/>
    </div>
  );
};

export default Pricing;
