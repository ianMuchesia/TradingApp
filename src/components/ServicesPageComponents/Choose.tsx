import React from "react";

const Choose = () => {
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto grid ">
        <div>
        <h2 className="text-5xl font-bold text-center dark:text-gray-50">
          Why choose us?
        </h2>
        <span className="block mb-2 text-xs font-medium text-center  dark:text-violet-400">
          We are dedicated to providing our clients with exceptional returns, a
          seamless user experience, and outstanding customer service.
        </span>
        <div className="grid place-items-center mt-8  lg:mb-10">
        <button className="shadow__btn"> Learn More</button>
        </div>
        </div>
        <div className="grid gap-6  lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 lg:space-y-0 rounded-md dark:bg-gray-900">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  dark:bg-violet-400 dark:text-gray-900">
              1
            </div>
            <p className="text-2xl font-semibold">
              Consistently high returns on investments.</p>
              <p className="font-thin lg:text-sm hover:border-2 rounded-xl p-3   "> 
              Our team of experienced analysts and traders use cutting-edge tools and strategies to identify profitable opportunities and make well-informed trades that generate high returns for our clients.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 lg:space-y-0 rounded-md dark:bg-gray-900">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  dark:bg-violet-400 dark:text-gray-900">
              2
            </div>
            <p className="text-2xl font-semibold">
              Seamless User Experience.</p> <p className="font-thin lg:text-sm hover:border-2 rounded-xl p-3"> Our platform is designed to be user-friendly and easy to navigate, so our clients can easily monitor their investments and make trades with ease.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 lg:space-y-0 rounded-md dark:bg-gray-900">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  dark:bg-violet-400 dark:text-gray-900">
              3
            </div>
            <p className="text-2xl font-semibold">
              Exceptional customer service.</p> <p className="font-thin lg:text-sm hover:border-2 rounded-xl p-3">  We are dedicated to providing our clients with the best possible experience. Our support team is available to answer any questions and address any concerns our clients may have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
