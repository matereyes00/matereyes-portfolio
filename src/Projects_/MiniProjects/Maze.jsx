import React, { useState } from "react";

const Maze = () => {
	const [rowsInput, setRowsInput] = useState(10);
	const [colsInput, setColsInput] = useState(10);
	const [maze, setMaze] = useState([]);

	const generateMaze = () => {
		const mazeRows = [];
		const rows = parseInt(rowsInput);
		const cols = parseInt(colsInput);
		if (rows > 10 || cols > 10) {
			alert("Too big.");
		} else if (rows <= 3 || cols <= 3) {
			alert("Too Small");
		} else {
			for (let i = 0; i < rows; i++) {
				let mazeCols = [];
				for (let j = 0; j < cols; j++) {
					const gridCell = (
						<div
							key={`${i}-${j}`}
							className="w-20 h-20 border-2 bg-gray-300 border-2 border-black"
						></div>
					);
					mazeCols.push(gridCell);
					console.log(mazeCols);
				}
				mazeRows.push(mazeCols);
			}
			setMaze(
				mazeRows.map((row, index) => (
					<div key={`${row}-${index}`} className="flex">
						{row.map((col) => col)}
					</div>
				))
			);
		}
	};

	const updateRowValue = (e) => {
		const updatedRow = e.target.value;
		setRowsInput(updatedRow);
	};
	const updateColValue = (e) => {
		const updatedCol = e.target.value;
		setColsInput(updatedCol);
	};

	return (
		<>
			<h1>Maze</h1>
			<div className="flex flex-col w-1/2 mx-auto justify-center">
				<input value={rowsInput} onChange={updateRowValue} type="number" />
				<input value={colsInput} onChange={updateColValue} type="number" />
				<button onClick={generateMaze}>Generate Maze</button>
			</div>
			<div className="border-4">{maze}</div>
		</>
	);
};

export default Maze;
