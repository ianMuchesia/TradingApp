import altcoins from "../../assets/altcoins.png";
import bitcoin_calculator from "../../assets/bitcoin-calculator.png";
import bitcoin_encryption from "../../assets/bitcoin-encryption.png";
import mining_hardware from "../../assets/mining-hardware.png";
const ServiceCard = () => {
  return (
    <div>
      {" "}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
          <div className="grid place-items-center">
            <img
              className=" w-40 object-center  h-40  "
              src={altcoins}
              alt=""
            />
          </div>
          <div className="p-6">
            <small className="text-gray-900 text-xs">Currency</small>
            <h1 className="text-2xl font-medium text-gray-700 pb-2">
              Multi-Currency Support
            </h1>
            <p className="text text-gray-500 leading-6">
            Multi-currency support for trading in different markets and currency fluctuations.
            </p>
          </div>
        </div>

        <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20 ">
          <div className="grid place-items-center">
            <img
              className=" w-40 object-center  h-40  "
              src={bitcoin_encryption}
              alt=""
            />
          </div>
          <div className="p-6">
            <small className="text-gray-900 text-xs">Automated</small>
            <h1 className="text-2xl font-medium text-gray-700 pb-2">
              Automated Trading Systems
            </h1>
            <p className="text text-gray-500 leading-6">
            Automated trading systems that use advanced algorithms for efficient and profitable trades, with customizable settings.
            </p>
          </div>
        </div>

        <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
          <div className="grid place-items-center">
            <img
              className=" w-40 object-center  h-40  "
              src={mining_hardware}
              alt=""
            />
          </div>
          <div className="p-6">
            <small className="text-gray-900 text-xs">Research</small>
            <h1 className="text-2xl font-medium text-gray-700 pb-2">
            Third-party research.
            </h1>
            <p className="text text-gray-500 leading-6">
            Third-party research and news for additional market insights and informed trade decisions.
            </p>
          </div>
        </div>

        <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
          <div className="grid place-items-center">
            <img
              className=" w-40 object-center  h-40  "
              src={bitcoin_calculator}
              alt=""
            />
          </div>
          <div className="p-6">
            <small className="text-gray-900 text-xs">Mobile</small>
            <h1 className="text-2xl font-medium text-gray-700 pb-2">
            Mobile trading platform.
            </h1>
            <p className="text text-gray-500 leading-6">
            Mobile trading platform that provides all the features of the desktop version and allows convenient trading on-the-go, with real-time market data and trade execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
