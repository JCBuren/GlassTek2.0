import React from "react"
import {
	AiFillFacebook,
	AiFillTwitterCircle,
	AiFillGoogleCircle,
	AiFillInstagram,
} from "react-icons/ai"
import { FaSnapchatGhost } from "react-icons/fa"

const SocialIcons = ({ Icons }) => {
	return (
		<div className="text-gold">
			
				<span className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-purple-600 mx-1.5 text-xl hover:text-gray-100 hover:bg-
        duration-300 "
				>
					<AiFillFacebook size={30}/>
                    <AiFillTwitterCircle size={30}/>
                    <AiFillGoogleCircle size={30}/>
                    <AiFillInstagram size={30}/>
                    <FaSnapchatGhost size={30}/>
				</span>
			
		</div>
	)
}

export default SocialIcons
