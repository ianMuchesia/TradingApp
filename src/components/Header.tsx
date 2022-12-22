import bitcoin from "../assets/bitcoin.png";

import cent from "../assets/cent.png";
import AI from "../assets/artificial.png";
import Navbar from "./Navbar";
import bitcoinShiny from "../assets/bitcoinShiny.jpg";

const Header = () => {
  return (
    <header>
      <div className="relative">
        {/*     <div>
            <img
            src={bgimg}
            alt=""
            className="object-cover sm:w-full h-[527px] hidden"/>
        </div> */}
        <div>
          <img
            src={bitcoinShiny}
            alt="bitcoin shiny"
            className="object-cover sm:w-full h-[527px] lg:h-[620px]"
          />
        </div>
        <div
          style={{ background: "rgba(3, 27, 52, 0.66)" }}
          className="absolute h-[527px] w-full top-0 lg:h-[620px]"
        >
          <Navbar />
          <div>
            <img
              src={bitcoin}
              alt="bitcoin coin"
              className="rotate-45  top-28 ml-52 h-28 w-28 absolute sm:left-48"
            />
          </div>

          <div className="sm:ml-8 w-[40%]">
            <h1 className="font-[800] text-5xl sm:text-6xl text-white w-[60%]">
              Exchange and trade
            </h1>
            <h3 className="text-3xl text-white ">at the best rate</h3>
            <p className="text-sm lg:text-lg text-gray-200 hidden lg:block">
              There are many variations of passages of Lorem Ipsum form, by
              injected humour randomised words which don't look even slightly
              believable.
            </p>
            <button
              style={{
                background:
                  "linear-gradient(90.07deg, #FF436B -0.79%, rgba(253, 165, 109, 0.98) 99.94%)",
              }}
              className="text-xl p-3 mt-2 mx-2 rounded-lg text-white "
            >
              Start Here
            </button>
            <img
              src={cent}
              alt="a canadian cent"
              className="-rotate-45 h-24 w-16 ml-10 mt-4 "
            />
          </div>
          <img
            src={bitcoin}
            alt="bitcoin coin"
            className="hidden sm:block absolute -rotate-45  bottom-24 right-48 h-28 w-32 "
          />
          <img
            src={cent}
            alt="a canadian cent"
            className="rotate-45 h-48 w-32 hidden xl:block absolute top-24 right-[600px] "
          />
          <img
            src={cent}
            alt="a canadian cent"
            className="-rotate-45 h-48 w-32 hidden xl:block absolute bottom-40 right-[600px]"
          />
          <img
            src={cent}
            alt="a canadian cent"
            className="rotate-45 h-48 w-32 hidden xl:block absolute bottom-0 right-[600px]"
          />
          <img
            src={AI}
            alt="ROBOT"
            className="bottom-0 right-0 absolute h-96 w-48 lg:h-[550px] lg:w-96"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
