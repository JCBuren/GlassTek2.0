import React from "react"
import NavBar from "./NavBar"
import Chip from "../assets/Chip.jpg"

const Repair = () => {
	return (
		<>
			<div className="flex items-center">
				<NavBar />
				<div className="p-3 max-h-full w-[600px] ml-12 mr-12">
					<h1 className="p-6 font-bold text-2xl">Auto Glass Repair</h1>
					<a className="text-xl">
						With Glasstek's Mobile Chip Repair, we'll come to you! Our
						repair techniques result in a clean finished product, at an
						affordable rate to you. We also work with EVERY Insurance
						company if you want to file a claim for your repair. Give us a
						Call, or click to request a quote today!
					</a>
					<button className="flex p-8 mt-6 ml-14">
						
						Click here for a Quote
					</button>
				</div>
				<img
					src={Chip}
					alt="/"
					className="w-[720px] h-[820px] rounded-xl"
				/>
			</div>
		</>
	)
}

export default Repair
