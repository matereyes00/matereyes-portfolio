import React, { useState } from "react";
import { Link } from "react-router-dom";
import wellDone from "../../images/steak-assets/Group 5.svg";
import mediumWell from "../../images/steak-assets/Group 4.svg";
import medium from "../../images/steak-assets/Group 3.svg";
import mediumRare from "../../images/steak-assets/Group 2.svg";
import rare from "../../images/steak-assets/Group 1.svg";
import "./projectBgs.css";

const SteakTimer = () => {
	let [time, setTimer] = useState(0);
	let [message, setMsg] = useState("Not Started");

	let stopTimer = (timer) => {
		clearInterval(timer);
		setTimer(0);
		setMsg("Timer was abrumptly stopped!");
	};

	let countdownTimer = (seconds) => {
		setTimer(seconds);
		setMsg("Timer started");
		let steakCookTimer = setInterval(() => {
			setTimer((prevSec) => {
				if (prevSec === 0) {
					clearInterval(steakCookTimer);
					setTimer(0);
					return;
				}
				setMsg("Timer ongoing");
				return prevSec - 1;
			});
		}, 1000);
	};

	const rareTimer = (e) => {
		var minutesToSeconds = Math.floor(1 * 60);
		countdownTimer(minutesToSeconds);
	};

	const mediumRareTimer = (e) => {
		var minutesToSeconds = Math.floor(2 * 60);
		countdownTimer(minutesToSeconds);
	};

	const mediumTimer = (e) => {
		var minutesToSeconds = Math.floor(3 * 60);
		countdownTimer(minutesToSeconds);
	};

	const mediumWellTimer = (e) => {
		var minutesToSeconds = Math.floor(4 * 60);
		countdownTimer(minutesToSeconds);
	};

	const wellTimer = (e) => {
		var minutesToSeconds = Math.floor(5 * 60);
		countdownTimer(minutesToSeconds);
	};

	const timers = [
		rareTimer,
		mediumRareTimer,
		mediumTimer,
		mediumWellTimer,
		wellTimer,
	];
	const images = [rare, mediumRare, medium, mediumWell, wellDone];
	const steakType = [
		"Rare",
		"Medium Rare",
		"Medium",
		"Medium Well",
		"Well Done",
	];
	const steakDashboard = steakType.map((title, index) => (
		<button
			key={index}
			className="text-white bg-slate-700 p-5 text-xl mt-30 rounded-2xl"
			onClick={timers[index]}
		>
			<div className="flex flex-col-reverse justify-around">
				<h1>{steakType[index]}</h1>
				<img src={[images[index]]} alt="type-of-steak" />
			</div>
		</button>
	));

	return (
		<>
			<div id="steak-bg">
				<button>
					<Link to="/mini-projects">Back</Link>
				</button>
				<h1 className="text-5xl">Cook Steak with me</h1>
				<h1>Time left:{time}</h1>
				<h1>{message}</h1>
				<button
					onClick={stopTimer}
					className="p-3 bg-red-300 text-slate-900 mr-3 ml-3 rounded-xl"
				>
					Stop Timer
				</button>

				{/* https://medium.com/@samsonspaddockau/whats-the-difference-between-rare-medium-and-well-done-steak-fe463e0f960f */}
				<div className="grid grid-flow-row grid-cols-3 gap-9 justify-items-center p-5 mx-auto my-4">
					{steakDashboard}
				</div>
			</div>
		</>
	);
};

export default SteakTimer;
