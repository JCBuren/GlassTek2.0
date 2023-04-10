import React from "react"
import NavBar from "./NavBar"
import AgPic from "../assets/Ag.jpg"

const Ag = () => {
	return (
		<>
			<div className="flex">
				<NavBar />
				<div className="p-3 max-h-full w-[400px]">
					<h1 className="p-6 font-bold text-xl">
						AG & Industrial Equipment
					</h1>
					<a className=" inherit align-middle">
						CASE, John Deere, CAT, Volvo. Whatever brand your company or
						farm uses, we can replace it. We'll perform installs on
						eqiuipment even if you already have the glass, but we're happy
						to help you find the right glass as well. Save time & money
						with Glasstek Mobile, so we can come to you and keep your
						equipment on site.
						<button className="p-4 ml-14">Call us Today!</button>
					</a>
				</div>
				<img src={AgPic} alt="/" className="w-[1420px] h-[942px]" />
			</div>
		</>
	)
}

export default Ag
