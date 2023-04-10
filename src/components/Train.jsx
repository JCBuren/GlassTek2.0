import React from "react"
import NavBar from "./NavBar"
import TrainPic from "../assets/Train.jpg"


const Train = () => {
	return (<>
        <div className="flex">
            <NavBar />
            <div className="p-3 max-h-full w-[400px]">
                <h1 className="p-6 font-bold text-xl">Trains & Rail Equipment</h1>
                <a className=" inherit align-middle">We offer custom cut greentint and graytint laminated glass pieces for all types of locomotive equipment. Glasstek's Mobile team can cut in the field to keep your equipment moving. Our installation area for Locomotive equipment is larger than our other services, please give us a call to discuss.
                    <button className="flex p-4 ml-14 mt-4">Call us Today!</button>
                </a>
            </div>
            <img src={TrainPic} alt="/" className="w-[1080px] h-[1240px] " />
            
        </div>
    </>)
}


export default Train
