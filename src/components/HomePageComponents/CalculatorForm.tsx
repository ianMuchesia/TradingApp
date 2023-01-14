import React from "react";

interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  currencyDetails: {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
  };
  result: number;
  list: [];
 
  currencyList: (
    list: string[],
    selectedOption: string,
    name: string
  ) => JSX.Element;

}

const PricingForm = ({
  handleSubmit,
  currencyDetails,
  result,
  list,
  currencyList,
  handleChange,
}: Props) => {
  return (
    <form
      style={{
        background:
          "linear-gradient(90.07deg, #FF436B -0.79%, rgba(253, 165, 109, 0.98) 99.94%)",
      }}
      className="rounded-[34px] shadow-2xl mx-4 p-3 my-4 sm:p-10"
      onSubmit={handleSubmit}
    >
      <h2 className="text-white text-5xl font-bold text-center">
        Currency Calculator
      </h2>
      <p className="text-center text-gray-200 text-base m-4">
      Introducing the TradeSmart Currency Converter, a powerful tool that helps you easily calculate the currency conversion rate and make accurate trade decisions, in real-time.
      </p>
      <h5 className="text-2xl m-1  text-gray-200 text-center">
        please enter the amount here
      </h5>
      <div className="glass mx-14 sm:mx-24 md:mx-48 lg:mx-96 xl:mx-[600px] ">
        <input
          type="number"
          value={currencyDetails.amount}
          placeholder="please enter your amount here"
          name="amount"
          className="bg-transparent border-none text-gray-200 w-full text-center"
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-6 my-8 sm:grid-cols-2 lg:mx-32">
        <div className="glass">
          <h5 className="text-2xl m-1  text-gray-200">
            {result ? currencyDetails.amount : "From"}
          </h5>
          {currencyList(list, currencyDetails.fromCurrency, "fromCurrency")}
        </div>
        <div className="glass">
          <h5 className="text-2xl m-1  text-gray-200">
            {result ? result : "To"}
          </h5>
          {currencyList(list, currencyDetails.toCurrency, "toCurrency")}
        </div>
      </div>
      <div className="grid place-items-center">
        <button className="bg-purple-800 text-white text-lg p-2 rounded-lg m-1">
          Convert
        </button>
      </div>
      <p className="text-2xl text-gray-200  mx-4 my-14 text-center">
        {result
          ? currencyDetails.amount +
            " " +
            currencyDetails.fromCurrency +
            " = " +
            result +
            " " +
            currencyDetails.toCurrency
          : " = "}
      </p>
    </form>
  );
};

export default PricingForm;
