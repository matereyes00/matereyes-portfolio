import { useState } from "react";
import ArrayVisualizer from "./AlgorithmVisualizer/ArrayVisualizer";
import StackVisualizer from "./AlgorithmVisualizer/StackVisualizer";
import QueueVisualizer from "./AlgorithmVisualizer/Data Structures/QueueViz";
import Description from "./AlgorithmVisualizer/AlgoDescription";

const ReactPractice = () => {
	const [selectedStructure, setSelectedStructure] = useState(null);
	const dataStructures = ["array", "stack", "queue"];

	return (
		<>
			<h1 className="text-center text-xl font-bold p-4">
				Visualizing Data Structures and Algorithms
			</h1>
			<div className="bg-[#F0F5F1] p-2 flex">
				<div className="bg-[#d2e1d5] w-[20%] p-4">
					<h1 className="font-bold text-lg">Data Structures</h1>
					{dataStructures.map((struct, idx) => (
						<h1
							key={idx}
							className="ml-2 cursor-pointer hover:font-bold"
							onClick={() => setSelectedStructure(struct)}
						>
							{struct}
						</h1>
					))}
					<h1 className="font-bold text-lg mt-4">Algorithms</h1>
				</div>

				{/* Main Content */}
				<div className="w-[80%] flex flex-col items-center p-4">
					<div className="bg-[#d2e1d5] w-full p-4">
						{<Description type={selectedStructure} />}
						{!selectedStructure && (
							<p>Select a data structure from the sidebar to begin.</p>
						)}
					</div>
					<div className="bg-[#d2e1d5] w-full h-96 mt-4 flex items-center justify-center">
						{selectedStructure === "array" && <ArrayVisualizer />}
						{selectedStructure === "stack" && <StackVisualizer />}
						{selectedStructure === "queue" && <QueueVisualizer />}
						{!selectedStructure && (
							<p>Select a data structure from the sidebar to begin.</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ReactPractice;
