import React, { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import NavBar from "./NavBar"
import { NavLink } from "react-router-dom"
import emailjs from "@emailjs/browser"

const Quote = () => {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				"service_7wp5e8c",
				"template_utptyfv",
				form.current,
				"rs42lMZodW4SIb3ou"
			)
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)
		e.target.reset()
	}

	return (
		<div className="flex max-h-full">
			<NavBar />
			<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
				<h1 className="text-3xl">Request a Quote</h1>
				<div className="p-4">
					<form ref={form} onSubmit={sendEmail}>
						<div className="grid md:grid-cols-2 gap-4 w-full py-2">
							<div className="flex flex-col">
								<label className="uppercase text-sm py-2 font-bold">
									Name
								</label>
								<input
									className="border-2 rounded-lg p-3 flex border-gray-300"
									type="text"
									name="user_name"
								/>
							</div>
							<div className="flex flex-col">
								<label className="uppercase text-sm py-2 font-bold">
									Email{" "}
								</label>
								<input
									className="border-2 rounded-lg p-3 flex border-gray-300"
									type="text"
									name="user_phone"
								/>
							</div>
						</div>
						<div className="grid md:grid-cols-2 gap-4 w-full py-2">
							<div className="flex flex-col">
								<label className="uppercase text-sm py-2 font-bold">
									Phone Number
								</label>
								<input
									className="border-2 rounded-lg p-3 flex border-gray-300"
									type="text"
									name="user_name"
								/>
							</div>
							<div className="flex flex-col">
								<label className="uppercase text-sm py-2 font-bold">
									VIN <span className="font-thin">(optional)</span>
								</label>
								<input
									className="border-2 rounded-lg p-3 flex border-gray-300"
									type="text"
									name="user_phone"
								/>
							</div>
						</div>

						<div className="grid md:grid-cols-3 gap-4 w-full py-2">
							<div className="flex flex-col">
								<label className="uppercase text-sm py-2 font-bold">
									Vehicle Year{" "}
								</label>
								<input
									className="border-2 rounded-lg p-3 flex border-gray-300"
									type="text"
									name="user_name"
								/>
							</div>
							<div className="flex flex-col">
								<label className="uppercase text-sm py-2 font-bold">
									Vehicle Make
								</label>
								<input
									className="border-2 rounded-lg p-3 flex border-gray-300"
									type="text"
									name="user_phone"
								/>
							</div>
							<div className="flex flex-col">
								<label className="uppercase text-sm py-2 font-bold">
									Vehicle Model
								</label>
								<input
									className="border-2 rounded-lg p-3 flex border-gray-300"
									type="text"
									name="user_phone"
								/>
							</div>
						</div>
						<div className="">
							<label className="uppercase text-sm py-2 font-bold">
								Insurance?
							</label>
							<input
								className="flex h-6 w-6"
								type="checkbox"
								name="user_insurance"
							/>
						</div>
						<div className="flex flex-col py-2">
							<label className="uppercase text-sm py-2 font-bold">
								Message
							</label>
							<textarea
								className="border-2 rounded-lg p-3 border-gray-300"
								rows="10"
								name="message"
							></textarea>
						</div>
						<button className="w-full p-4 text-gray-100 mt-4 font-bold">
							Send Message
						</button>
					</form>
				</div>
			</div>
			<div className="flex justify-center py-12"></div>
		</div>
	)
}

export default Quote
