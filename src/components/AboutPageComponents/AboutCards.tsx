import React from "react";
import {
  FcMoneyTransfer,
  FcAcceptDatabase,
  FcBullish,
  FcCalculator,
  FcAssistant,
} from "react-icons/fc";

const AboutCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   hover:animate-pulse">
        <FcAcceptDatabase size={50} />
        <h2 className="title-font font-medium text-3xl text-gray-900">593.24</h2>
        <p className="leading-relaxed">Present</p>
      </div>
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg grid place-items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   hover:animate-pulse">
        <FcAssistant  size={50}   />
     <h2 className="title-font font-medium text-3xl text-gray-900">10.345</h2>
        <p className="leading-relaxed text-center">Happy Customer</p>
      </div>
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg grid place-items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   hover:animate-pulse">
        <FcMoneyTransfer size={50}/>
        <h2 className="title-font font-medium text-3xl text-gray-900">3,569</h2>
        <p className="leading-relaxed">Transactions</p>
      </div>
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg grid place-items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   hover:animate-pulse">
        <FcBullish    size={50}  />
    <h2 className="title-font font-medium text-3xl text-gray-900">1250</h2>
        <p className="leading-relaxed">Commits</p>
      </div>
    </div>
  );
};

export default AboutCards;
