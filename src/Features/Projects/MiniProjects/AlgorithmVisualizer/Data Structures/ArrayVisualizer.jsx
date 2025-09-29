import { useState } from "react";
import Square from "../Square";

const ArrayVisualizer = () => {
	const colorClasses = [
		"bg-red-400",
		"bg-orange-400",
		"bg-yellow-400",
		"bg-green-400",
		"bg-blue-400",
		"bg-purple-400",
		"bg-pink-400",
		"bg-teal-400",
	];

	const CustomPosPushPop = (props) => {
		return (
			<>
				<label>
					{props.label}
					<input
						type="text"
						value={props.squareToPushPop}
						onChange={(e) => setSquareToPushPop(e.target.value)}
					/>
				</label>
			</>
		);
	};

	const [squares, setSquares] = useState([]);
	const [squareToPushPop, setSquareToPushPop] = useState("");

	const pushSquare = () => {
		const randomColor =
			colorClasses[Math.floor(Math.random() * colorClasses.length)];
		if (squareToPushPop === "") {
			setSquares([...squares, randomColor]);
		} else {
			const newSquares = [...squares];
			var intSquareToPushPop = parseInt(squareToPushPop);
			newSquares.splice(intSquareToPushPop, 0, randomColor);
			setSquares(newSquares);
		}
	};

	const popSquare = () => {
		if (squareToPushPop === "") {
			setSquares(squares.slice(0, -1));
		} else {
			const newSquares = [...squares];
			var intSquareToPushPop = parseInt(squareToPushPop);
			newSquares.splice(intSquareToPushPop, 1);
			setSquares(newSquares);
		}
	};

	return (
		<>
			<div className="flex flex-col items-center">
				<div className="flex gap-2 mb-4">
					{squares.map((className, idx) => (
						<Square key={idx} colorClassName={className} label={idx} />
					))}
				</div>

				<div className="flex flex-col gap-3">
					{/* push and pop - custom */}
					<CustomPosPushPop label="Square:" squareToPushPop={squareToPushPop} />
					{/* push - normal */}
					<button
						onClick={pushSquare}
						className="p-2 bg-green-500 text-white rounded"
					>
						Push
					</button>
					{/* pop - normal */}
					<button
						onClick={popSquare}
						className="p-2 bg-red-500 text-white rounded"
					>
						Pop
					</button>
				</div>
			</div>
		</>
	);
};

export default ArrayVisualizer;
