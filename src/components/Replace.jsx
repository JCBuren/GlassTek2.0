import React from "react"
import NavBar from "./NavBar"
import ReplacePic from "../assets/Replace.jpg"

const Replace = () => {
	return (
		<>
			<div className="flex items-center">
				<NavBar />
				<div className="p-3 max-h-full w-[600px] ml-12 mr-12">
					<h1 className="p-6 font-bold text-2xl ">
						Auto Glass Replacement
					</h1>
					<a className="text-xl">
						Windshields, Backglass, Doors, Side Windows, we do it all!
						We'll work on anything from your daily driver to brand new or
						custom hotrods. We'll also take great care of your classic
						car, or that project car in your garage. Our dedication to
						excellence means even if we find rust, we'll treat it for free
						as long as the glass is safe to replace. We prioritize safety,
						so all vehicles with ADAS (Lane Depature Warning, Lane Keep
						Assist, Eyesight) are calibrated as part of your quote.
					</a>
					<button className="flex p-8 mt-6 ml-14">
						{" "}
						Click here for a Quote
					</button>
				</div>
				<img
					src={ReplacePic}
					alt="/"
					className="w-[780px] h-[620px] rounded-xl "
				/>
			</div>
		</>
	)
}

export default Replace
