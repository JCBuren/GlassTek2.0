import React, { useState } from "react"
import NavBar from "./NavBar"

import HomeImage from "../assets/GlasstekBG.png"

const Home = () => {
	

	return (
		<div className="flex">
			<NavBar/>
			<div className="w-screen h-screen pb-24 mb-32">
				<img src={HomeImage} alt="/" className="w-screen h-screen pb-24" />
				<div className="left-1">hellow</div>
			</div>
		</div>
	)
}

export default Home
