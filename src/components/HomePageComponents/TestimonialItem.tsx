import React from 'react'
import "./styles.css"
import { motion , Variants } from 'framer-motion'

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
const TestimonialItem = () => {
  return (
    
        
		<motion.section
		
		className=" bg-[#3d1d98] dark:bg-gray-800 dark:text-gray-100 ">
	<div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
		<h1 className="p-4 text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
	</div>
	<motion.div initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount:0.1}} 
	className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
	
		{/* 2 */}
		<div className="flex flex-col max-w-sm mx-4 h-[550px]  my-6 shadow-xl  ">
			<motion.div variants={cardVariants} className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>I have been using the trading app for several months now and it has greatly improved my returns. The user interface is easy to navigate and the research and news features are incredibly helpful. I highly recommend it to any trader.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</motion.div>
			<div  className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">John Smith</p>
				<p className="text-sm uppercase">Professional Trader</p>
			</div>
		</div>
		<motion.div variants={cardVariants} className="flex flex-col max-w-sm mx-4 h-[550px] my-6 shadow-xl">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>The currency conversion feature on the app has saved me so much time and hassle. The rates are always up to date and accurate. I couldn't trade effectively without it.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Sarah Lee</p>
				<p className="text-sm uppercase">Independent Trader</p>
			</div>
		</motion.div>
		<motion.div variants={cardVariants}  className="flex flex-col max-w-sm mx-4 h-[550px] my-6 shadow-xl">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>The customer support team is top-notch. They were able to quickly resolve any issues I had and were always available to answer any questions. The trading app is reliable and user-friendly, a must-have for any serious trader.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Michael Davis</p>
				<p className="text-sm uppercase">Experienced Trader</p>
			</div>
		</motion.div>
	</motion.div>
</motion.section>
        
  )
}

export default TestimonialItem