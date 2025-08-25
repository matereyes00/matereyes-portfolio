import { useState } from "react";
import Rectangle from "../Rectangle";

const StackVisualizer = () => {
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

	const [stack, setStack] = useState([]);
	const [error, setErrorMsg] = useState("");

	const top = stack.length > 0 ? stack[stack.length - 1] : "Empty";
	const base = stack.length > 0 ? stack[0] : "Empty";

	const pushRectangle = () => {
		const randomColor =
			colorClasses[Math.floor(Math.random() * colorClasses.length)];
		setStack([...stack, randomColor]);
		setErrorMsg("");
	};

	const popRectangle = () => {
		if (stack.length === 0) {
			setErrorMsg("You don't have anything to pop");
		}
		if (stack.length > 0) {
			setStack(stack.slice(0, -1));
		}
	};

	return (
		<>
			<div className="flex flex-col items-center w-full">
				{/* Stack container */}
				<div className="flex flex-col-reverse gap-1 w-80">
					{stack.map((rect, idx) => (
						<Rectangle key={idx} colorClassName={rect} label={idx} />
					))}
				</div>
				{/* buttons */}
				<div className="mt-4">
					<button
						onClick={pushRectangle}
						className="p-2 bg-green-500 text-white rounded mr-2"
					>
						INSERT
					</button>
					<button
						onClick={popRectangle}
						className="p-2 bg-red-500 text-white rounded"
					>
						DELETE
					</button>
				</div>
				<div>
					<h1>Top of the stack: {top}</h1>
					<h1>Base of the stack: {base}</h1>
					<h1 className="text-red-400">{error}</h1>
				</div>
			</div>
		</>
	);
};

export default StackVisualizer;
