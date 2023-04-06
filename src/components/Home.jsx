import React, { useState } from "react"
import NavBar from "./NavBar"

import HomeImage from "../assets/GlasstekBG.png"

const Home = () => {
	return (
		<div className="flex">
			<NavBar />
			<div className="w-screen h-screen pb-24 mb-32">
				<img src={HomeImage} alt="/" className="w-screen h-screen pb-24" />
				<div className="left-1">
					Welcome to Glasstek, where technology and technique meet. We
					offer service on any vehicle in Sioux Falls and the surrounding
					areas. We use the latest technology and tools to ensure a safe &
					high quality product. 18 years of combined experience.
				</div>
			</div>
		</div>
	)
}

export default Home
