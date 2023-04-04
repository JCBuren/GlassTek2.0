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
		<div className="text-dark-purple">
			<span
				className="p-2 cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl bg-gold "
			>
				<AiFillFacebook
					size={30}
					className="hover:text-gray-100 hover:bg-
        duration-300"
				/>
				<AiFillTwitterCircle
					size={30}
					className="hover:text-gray-100 hover:bg-
        duration-300"
				/>
				<AiFillGoogleCircle
					size={30}
					className="hover:text-gray-100 hover:bg-
        duration-300"
				/>
				<AiFillInstagram
					size={30}
					className="hover:text-gray-100 hover:bg-
        duration-300"
				/>
				<FaSnapchatGhost
					size={30}
					className="hover:text-gray-100 hover:bg-
        duration-300"
				/>
			</span>
		</div>
	)
}

export default SocialIcons
