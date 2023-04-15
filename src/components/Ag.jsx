import React from "react"
import NavBar from "./NavBar"
import AgPic from "../assets/Ag.jpg"

const Ag = () => {
	return (
		<>
			<div className="flex items-center">
				<NavBar />
				<div className="p-3 max-h-full w-[600px] ml-12 mr-12">
					<h1 className="p-6 font-bold text-2xl">
						AG & Industrial Equipment
					</h1>
					<a className="text-xl">
						CASE, John Deere, CAT, Volvo. Whatever brand your company or
						farm uses, we can replace it. We'll perform installs on
						eqiuipment even if you already have the glass, but we're happy
						to help you find the right glass as well. Save time & money
						with Glasstek Mobile, so we can come to you and keep your
						equipment on site.
						<button className="flex p-8 mt-6 ml-14">Call us Today!</button>
					</a>
				</div>
				<img src={AgPic} alt="/" className="w-[720px] h-[820px] rounded-xl" />
			</div>
		</>
	)
}

export default Ag
