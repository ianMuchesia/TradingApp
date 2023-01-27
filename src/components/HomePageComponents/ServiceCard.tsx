import {
  altcoins,
  bitcoin_encryption,
  bitcoin_calculator,
  mining_hardware,
} from "../../assets";
import {motion, Variants} from "framer-motion"


const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
    
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};
const ServiceCard = () => {
  return (
    <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}
   
    >
      {" "}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <motion.div
        variants={cardVariants}
        className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
          <div  className="grid place-items-center">
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
              Multi-currency support for trading in different markets and
              currency fluctuations.
            </p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20 ">
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
              Automated trading systems that use advanced algorithms for
              efficient and profitable trades, with customizable settings.
            </p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
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
              Third-party research and news for additional market insights and
              informed trade decisions.
            </p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
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
              Mobile trading platform that provides all the features of the
              desktop version and allows convenient trading on-the-go, with
              real-time market data and trade execution.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
