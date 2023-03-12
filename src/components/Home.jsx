import React, { useState } from "react"
import { MdOutlineRequest } from "react-icons/md"
import { AiOutlineHome } from "react-icons/ai"
import Excavator from "../assets/Excavator.png"
import Diagnostic from "../assets/Diagnostic.png"
import OpenClose from "../assets/OpenClose.png"
import Rv from "../assets/Rv.png"
import Semi from "../assets/Semi.png"
import Train from "../assets/Train.png"
import WindshieldChip from "../assets/WindshieldChip.png"
import WindshieldReplace from "../assets/WindshieldReplace.png"
import HomeLogo from "../assets/Home.png"
import Logo from "../assets/Logo.png"
import Quote from "../assets/Quote.png"
import Guy from "../assets/Guy.png"
import Facebook from "../assets/Facebook.png"
import Snapchat from "../assets/Snapchat.png"
import Google from "../assets/Google.png"


const Home = () => {
	const [open, setOpen] = useState(true)
	const Menus = [
		{ title: "Home", src:HomeLogo},
		{ title: "Quote", src:Quote},
		{ title: "Auto Glass Replacement", src:WindshieldReplace, gap: true },
		{ title: "Auto Glass Repair ", src:WindshieldChip},
		{ title: "Ag Equip / Industrial", src:Excavator},
		{ title: "Semi / Tractor Trailer", src:Semi},
		{ title: "Sensor Calibration", src:Diagnostic},
		{ title: "Locomotive Equipment", src:Train},
        { title: "RV / Campers", src:Rv},
        { title: "Meet the Crew", src:Guy, gap: true},
        { title: "Facebook", src:Facebook},
        { title: "Snapchat", src:Snapchat},
        { title: "Leave a Review", src:Google}
	]

	return (
		<div className="flex">
			<div
				className={` ${
					open ? "w-72" : "w-20 "
				} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
			>
				<img
					src={OpenClose}
					className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
					onClick={() => setOpen(!open)}
				/>
				<div className="flex gap-x-4 items-center">
					<img
						src={Logo}
						className={`cursor-pointer duration-500 ${
							open && "rotate-[360deg]"
						}`}
					/>
					<h1
						className={`text-white origin-left font-medium text-xl duration-200 ${
							!open && "scale-0"
						}`}
					>
						GlassTek
					</h1>
				</div>
				<ul className="pt-6">
					{Menus.map((Menu, index) => (
						<li
							key={index}
							className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
								index === 0 && "bg-light-white"
							} `}
						>
							<img src={Menu.src} className=""/>
							<span
								className={`${
									!open && "hidden"
								} origin-left duration-200`}
							>
								{Menu.title}
							</span>
						</li>
					))}
				</ul>
			</div>
			<div className="h-screen flex-1 p-7">
				<h1 className="text-2xl font-semibold ">Home Page</h1>
			</div>
		</div>
	)
}

export default Home
