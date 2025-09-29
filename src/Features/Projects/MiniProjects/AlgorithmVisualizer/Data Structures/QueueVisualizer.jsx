import { useState } from "react";
import Square from "../Square";

const QueueVisualizer = () => {
	const [queue, setQueue] = useState([]);
	const [error, setErrorMsg] = useState("");

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

	const randomColor =
		colorClasses[Math.floor(Math.random() * colorClasses.length)];

	const head = queue.length > 0 ? queue[0] : "Empty";
	const tail = queue.length > 0 ? queue[queue.length - 1] : "Empty";

	const enqueue = () => {
		setQueue([...queue, randomColor]);
	};
	const dequeue = () => {
		if (queue.length === 0) {
			setErrorMsg("You don't have anything to dequeue");
		}
		if (queue.length > 0) {
			setQueue(queue.slice(1));
		}
	};

	return (
		<>
			<div className="flex flex-col items-center">
				<div className="flex gap-2 mb-4">
					{queue.map((className, idx) => (
						<Square key={idx} colorClassName={className} label={idx} />
					))}
				</div>
				<div className="flex flex-col gap-3">
					<button
						onClick={enqueue}
						className="p-2 bg-green-500 text-white rounded"
					>
						Enqueue
					</button>
					<button
						onClick={dequeue}
						className="p-2 bg-red-500 text-white rounded"
					>
						Dequeue
					</button>
				</div>

				<h1>HEAD: {head}</h1>
				<h1>TAIL: {tail}</h1>
				<p>{error}</p>
			</div>
		</>
	);
};

export default QueueVisualizer;
