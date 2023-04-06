import React from "react"
import ItemsContainer from "./ItemsContainer"
import SocialIcons from "./SocialIcons"
import { NavLink } from "react-router-dom"


const Footer = () => {
	return (
		<footer className="bg-dark-purple text-white">
			<div className=" md:flex md:justify-between md:items-center sm:px-12 px-4  bg-[#ffffff19] py-7 ">
				<h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
					Where
					<span className="text-gold"> Technology </span>
					
					& <span className="text-gold"> Technique</span> Meet
					
				</h1>
				<div className="grid grid-cols-1">
				<h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold underline">Hours:</h1>
				<a className="py-1">Monday 8:00am: - 5:00pm</a>
				<a className="py-1">Tuesday 8:00am: - 5:00pm</a>
				<a className="py-1">Wednesday 8:00am: - 5:00pm</a>
				<a className="py-1">Thursday 8:00am: - 5:00pm</a>
				<a className="py-1">Friday 8:00am: - 5:00pm</a>
				<a className="py-1">Saturday & Sunday: Closed</a>
				<a>Location: <span>4020 W. Tickman St. #129
					Sioux Falls, SD 57107</span>
				</a>
				<a>Phone: <span>605-951-9314</span></a>
				</div>
				

				<div className="inherit sm:max-w-[300] max-h-[225]">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.1160329430295!2d-96.7786455!3d43.5832994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878ecacef918517b%3A0x989f4b80c4186651!2s4020%20W%20Tickman%20St%20%23129%2C%20Sioux%20Falls%2C%20SD%2057107!5e0!3m2!1sen!2sus!4v1680213658019!5m2!1sen!2sus"
				title="myFrame"
				width="600"
				height="450"				
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
	
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
				<span>© 2023 GlassTek. All rights reserved.</span>
				<span>Website Created By JB-Creations</span>
				<SocialIcons />
			</div>
		</footer>
	)
}

export default Footer
