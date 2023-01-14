import React from 'react'
import Lottie from "lottie-react";
import lottieAnime from "../../assets/lottieAnime.json"
const Form = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieAnime,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault()
    }
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-xl-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-400">Get in touch with us...</div>
		</div>
		{/* <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" /> */}
        <div >
        <Lottie animationData={lottieAnime} loop={true} />
        </div>
	</div>
	<form  className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit}>
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="Your Name*" className="w-full p-3 border-2 rounded-xl dark:bg-gray-800" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded-xl border-2 dark:bg-gray-800" placeholder='Email' />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows={3} placeholder='message*' className="w-full p-3 rounded-xl border-2 dark:bg-gray-800"></textarea>
		</div>
		<button
               style={{
                background:
                  "linear-gradient(90.07deg, #FF436B -0.79%, rgba(253, 165, 109, 0.98) 99.94%)",
              }}
              className="text-xl p-3 mt-2 mx-2 rounded-lg text-white ">
                Send Message
              </button>
	</form>
</div>
  )
}

export default Form