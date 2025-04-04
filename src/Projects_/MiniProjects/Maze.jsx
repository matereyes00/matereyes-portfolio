import React, { useState } from "react";

const Maze = () => {
	const [rowsInput, setRowsInput] = useState(10);
	const [colsInput, setColsInput] = useState(10);
	const [playerPos, setPlayerPos] = useState();
	const [maze, setMaze] = useState([]);


	const exitSymbol = (
		<>
			<div
				className="w-14 h-14 border-2 bg-orange-900 border-2 border-black"
			></div>
		</>
	);

	const playerSymbol = (
		<>
			<div
				className="w-14 h-14 border-2 bg-yellow-600 border-2 border-black text-4xl"
			>x</div>
		</>
	);

	const normalGridCellSymbol = (i, j) => (
		<div
		key={`${i}-${j}`}
		className="w-14 h-14 border-2 bg-gray-300 border-2 border-black"
		></div>
	);

	const getRandomNumber = (min, max) => {
		return Number(Math.floor(Math.random() * (max - min + 1)) + min);
	};

	const generateRandomCoordinates = (maze, rows, cols) => {
		let x;
		let y;
		x = getRandomNumber(0, rows-1);
		y = getRandomNumber(0, cols-1);
		console.log("Trying coords:", x, y);
		// Defensive check
		if (!maze[x] || typeof maze[x][y] === "undefined") {
			console.warn("Invalid coords:", x, y);
			return null; // or return { x, y } if you prefer
		}
		return {x, y}
	}

	const generateMaze = () => {
		const mazeRows = [];
		const rows = parseInt(rowsInput);
		const cols = parseInt(colsInput);
	
		if (rows > 10 || cols > 30) {
			alert("Too big.");
			return;
		} else if (rows <= 9 || cols <= 9) {
			alert("Too Small");
			return;
		}
	
		// Step 1: Generate blank maze
		for (let i = 0; i < rows; i++) {
			let mazeCols = [];
			for (let j = 0; j < cols; j++) {
				mazeCols.push(null); // Use null for now; will fill in later
			}
			mazeRows.push(mazeCols);
		}
	
		// Step 2: Generate random coords
		const { x: playerX, y: playerY } = generateRandomCoordinates(mazeRows, rows, cols);
		let exitX, exitY;
		do {
			const coords = generateRandomCoordinates(mazeRows, rows, cols);
			exitX = coords.x;
			exitY = coords.y;
		} while (exitX === playerX && exitY === playerY); // avoid same spot
	
		// Step 3: Place player and exit
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				if (i === playerX && j === playerY) {
				mazeRows[i][j] = playerSymbol;
				} else if (i === exitX && j === exitY) {
				mazeRows[i][j] = exitSymbol;
				} else {
				mazeRows[i][j] = normalGridCellSymbol(i, j);;
				}
			}
		}

		// Step 4: Render the maze
		setMaze(
			mazeRows.map((row, i) => (
				<div key={`row-${i}`} className="flex">
					{row.map((cell, j) => (
						<div key={`cell-${i}-${j}`}>{cell}</div>
					))}
				</div>
			))
		);

		
	};
	

	const updateRowValue = (e) => {
		const updatedRow = e.target.value;
		setRowsInput(updatedRow);
	};
	const updateColValue = (e) => {
		const updatedCol = e.target.value;
		setColsInput(updatedCol);
	};


	const renderMaze = () => {

		
	}
	const moveLeft = (rows, cols, e) => {
		// get player position
		let playerX;
		let playerY;
		
	}

	return (
		<>
			<h1>Maze</h1>
			<div className="flex flex-col w-1/2 mx-auto justify-center">
				<input value={rowsInput} onChange={updateRowValue} type="number" />
				<input value={colsInput} onChange={updateColValue} type="number" />
				<button onClick={generateMaze}>Generate Maze</button>
			</div>
			<div className="w-1/2">{maze}</div>
			<button onClick={() => moveLeft(rowsInput, colsInput)}>Left</button>
		</>
	);
};

export default Maze;
