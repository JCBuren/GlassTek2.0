import React, { useState } from "react"
import NavBar from "./NavBar"

import HomeImage from "../assets/GlasstekBG.png"

const Home = () => {
	return (
		<div className="flex max-h-screen">
			<NavBar />
			<div className="w-screen ">
				<h1 className="absolute bottom-20 text-my-white font-bold text-xl p-2 text-center shadow-light-white">
					Welcome to Glasstek! We offer Auto-Glass service on any vehicle
					in Sioux Falls and the surrounding areas. Glasstek will work with{" "}
					<span className="font-bold">EVERY</span> insurance company for
					your Glass Replacement or Chip Repair, and we can give you a
					free, no obligation quote HERE. Our state of the art calibration
					equipment can help keep your cars' ADAS Systems (Lane Depature
					Warning, Lane Keep Assist, Eyesight) working properly. We also
					specialize in Auto Glass servicing for Commerical fleets, call us
					to ask how we can help keep your equipment on-site. We are
					passionite about Auto Glass and you'll see it in our work.
				</h1>
				<img src={HomeImage} alt="/" className="" />
			</div>
		</div>
	)
}

export default Home
