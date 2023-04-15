import React from "react"
import NavBar from "./NavBar"
import Calibration from "../assets/calibration.jpg"

const Sensor = () => {
	return (
		<>
			<div className="flex items-center">
				<NavBar />
				<div className="p-3 max-h-full w-[600px] ml-12 mr-12">
					<h1 className="p-6 font-bold text-2xl">Sensor Calibration</h1>
					<a className="text-xl">
						As technology and safety systems evolve, we stay on the
						cutting edge of the latest tools and software to ensure your
						vehicle performs as the manufacturer intended. We Service
						virtually all ADAS Vehicle Systems including : Lane Depature,
						Lane keep assist, Eyesight and more.
						<button className="flex p-10 mt-10 ml-14">
							Call us Today!
						</button>
					</a>
				</div>
				<img
					src={Calibration}
					alt="/"
					className="w-[720px] h-[820px] rounded-xl "
				/>
			</div>
		</>
	)
}

export default Sensor
