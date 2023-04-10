import React from "react"
import NavBar from "./NavBar"
import Calibration from "../assets/calibration.jpg"


const Sensor = () => {
	return (<>
        <div className="flex">
            <NavBar />
            <div className="p-3 max-h-full w-[400px]">
                <h1 className="p-6 font-bold text-xl">Sensor Calibration</h1>
                <a className=" inherit align-middle">
					As technology and safety systems evolve, we stay on the cutting edge of the latest tools and software to ensure your vehicle performs as the manufacturer intended. We Service virtually all ADAS Vehicle Systems including : Lane Depature, Lane keep assist, Eyesight and more. 
                    <button className="flex p-4 ml-14 mt-4">Call us Today!</button>
                </a>
            </div>
            <img src={Calibration} alt="/" className="w-[1080px] h-[1240px] " />
            
        </div>
    </>)
}

export default Sensor
