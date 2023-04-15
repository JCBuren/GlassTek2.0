import React from "react"
import NavBar from "./NavBar"
import TrainPic from "../assets/Train.jpg"

const Train = () => {
	return (
		<>
			<div className="flex items-center">
				<NavBar />
				<div className="p-3 max-h-full w-[600px] ml-12 mr-12">
					<h1 className="p-6 font-bold text-2xl">
						Trains & Rail Equipment
					</h1>
					<a className=" text-xl">
						We offer custom cut greentint and graytint laminated glass
						pieces for all types of locomotive equipment. Glasstek's
						Mobile team can cut in the field to keep your equipment
						moving. Our installation area for Locomotive equipment is
						larger than our other services, please give us a call to
						discuss.
						<button className="flex p-8 mt-10 ml-14">
							Call us Today!
						</button>
					</a>
				</div>
				<img
					src={TrainPic}
					alt="/"
					className="w-[720px] h-[820px] rounded-xl"
				/>
			</div>
		</>
	)
}

export default Train
