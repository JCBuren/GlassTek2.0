import React from "react"
import NavBar from "./NavBar"
import SemiPic from "../assets/Semi.jpg"

const Semi = () => {
	return (<>
        <div className="flex">
            <NavBar />
            <div className="p-3 max-h-full w-[400px]">
                <h1 className="p-6 font-bold text-xl">AG & Industrial Equipment</h1>
                <a className=" inherit align-middle">
                    No matter the fleet size, we'll help you keep your trucks on the road. International, Volvo, Peterbuilt, whatever your company drives, we can supply.
                    <button className="flex p-4 ml-14">Call us Today!</button>
                </a>
            </div>
            <img src={SemiPic} alt="/" className="w-[942px] h-[1240px]" />
            
        </div>
    </>)
}

export default Semi
