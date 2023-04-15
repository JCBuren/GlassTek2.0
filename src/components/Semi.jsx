import React from "react"
import NavBar from "./NavBar"
import SemiPic from "../assets/Semi.jpg"

const Semi = () => {
	return (
		<>
			<div className="flex items-center">
				<NavBar />
				<div className="p-3 max-h-full w-[600px] ml-12 mr-12">
					<h1 className="p-6 font-bold text-2xl">
						Semi & Tractor Trailer
					</h1>
					<a className="text-xl">
						No matter the fleet size, we'll help you keep your trucks on
						the road. International, Volvo, Peterbuilt, whatever your
						company drives, we can supply.
						<button className="flex p-10 mt-10 ml-14">
							Call us Today!
						</button>
					</a>
				</div>
				<img
					src={SemiPic}
					alt="/"
					className="w-[720px] h-[820px] rounded-xl"
				/>
			</div>
		</>
	)
}

export default Semi
