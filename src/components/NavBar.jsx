import React, { useState } from "react"
import { NavLink } from "react-router-dom"
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

const NavBar = () => {
	const [open, setOpen] = useState(true)
	const Menus = [
		{ title: "Home", src: HomeLogo, href: "/" },
		{ title: "Quote", src: Quote, href: "/Quote" },
		{
			title: "Auto Glass Replacement",
			src: WindshieldReplace,
			href: "/Replace",
			gap: true,
		},
		{ title: "Auto Glass Repair ", src: WindshieldChip, href: "/Repair" },
		{ title: "Ag Equip / Industrial", src: Excavator, href: "/Ag" },
		{ title: "Semi / Tractor Trailer", src: Semi, href: "/Semi" },
		{ title: "Sensor Calibration", src: Diagnostic, href: "/Sensor" },
		{ title: "Locomotive Equipment", src: Train, href: "/Train" },
		// { title: "RV / Campers", src: Rv, href: "/Rv" },
		// { title: "Meet the Crew", src: Guy, href: "/About", gap: true },
		{
			title: "Facebook",
			src: Facebook,
			href: "www.facebook.com/glassteksd",
			gap: true,
		},
		{ title: "Leave a Review", src: Google, href: "/" },
	]
	return (
		<div
			className={` ${
				open ? "w-72" : "w-28 "
			} bg-dark-purple px-2 relative duration-300`}
		>
			<img
				src={OpenClose}
				className={`absolute cursor-pointer -right-4 top-8 w-10 border-my-black border-2 rounded-full  
					${!open && "rotate-180"}`}
				onClick={() => setOpen(!open)}
			/>
			<div className="flex gap-x-4 items-center">
				<img
					src={Logo}
					className={`cursor-pointer duration-500 ${
						open && "rotate-[360deg]"
					}`}
				/>
				{/* <h1
					className={`text-white origin-left font-medium text-3xl duration-200 my-6 ${
						!open && "scale-0"
					}`}
				>
					GlassTek
				</h1> */}
			</div>
			<ul className="pt-2">
				{Menus.map((Menu, index) => (
					<li
						key={index}
						className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
							${Menu.gap ? "mt-6" : "mt-3"}  `}
					>
						<img
							src={Menu.src}
							className="bg-white rounded-xl p-2 items-c"
						/>

						<span
							className={`${!open && "hidden"} origin-left duration-200`}
						>
							<NavLink to={`${Menu.href}`}>{Menu.title}</NavLink>
						</span>
					</li>
				))}
				{/* <li className="flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
					<img src={Facebook} className="bg-white rounded-xl p-2"/>
					<span className={`${!open && "hidden"} origin-left duration-200`}>
					<NavLink to={{pathname: "www.facebook.com/glassteksd"}} target="_blank"><a href="www.facebook.com/glassteksd
">Facebook</a></NavLink>
					</span>
				</li> */}
			</ul>
		</div>
	)
}

export default NavBar
