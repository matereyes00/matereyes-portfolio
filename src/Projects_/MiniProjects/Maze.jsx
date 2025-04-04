import React, { useState } from "react";

const Maze = () => {
	const [rowsInput, setRowsInput] = useState(10);
	const [colsInput, setColsInput] = useState(10);
	const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
	const [mazeData, setMazeData] = useState([]); // <-- this stores "player", "exit", or "empty"

	const generateMaze = () => {
		const rows = parseInt(rowsInput);
		const cols = parseInt(colsInput);

		if (rows > 10 || cols > 30) {
			alert("Too big.");
			return;
		} else if (rows <= 9 || cols <= 9) {
			alert("Too Small");
			return;
		}

		const newMaze = Array.from(
			{ length: rows },
			() => Array.from({ length: cols }, () => "empty") // assign all cells in the maze as empty
		);

		const randCoord = () => ({
			x: Math.floor(Math.random() * rows),
			y: Math.floor(Math.random() * cols),
		});

		let player = randCoord();
		let exit = randCoord();
		while (exit.x === player.x && exit.y === player.y) {
			exit = randCoord();
		}

		newMaze[player.x][player.y] = "player";
		newMaze[exit.x][exit.y] = "exit";

		setMazeData(newMaze);
		setPlayerPos(player);
	};

	const moveLeft = () => {
		const { x, y } = playerPos;
		if (y === 0) return;
		const newMaze = mazeData.map((row) => [...row]); // deep copy
		newMaze[x][y] = "empty";
		newMaze[x][y - 1] = "player";
		setMazeData(newMaze);
		setPlayerPos({ x, y: y - 1 });
	};

	const moveRight = () => {
		const { x, y } = playerPos;
		if (y === 0) return;
		const newMaze = mazeData.map((row) => [...row]); // deep copy
		newMaze[x][y] = "empty";
		newMaze[x][y + 1] = "player";
		setMazeData(newMaze);
		setPlayerPos({ x, y: y + 1 });
	};

	const moveUp = () => {
		const { x, y } = playerPos;
		if (y === 0) return;
		const newMaze = mazeData.map((row) => [...row]); // deep copy
		newMaze[x][y] = "empty";
		newMaze[x - 1][y] = "player";
		setMazeData(newMaze);
		setPlayerPos({ x: x - 1, y });
	};
	const moveDown = () => {
		const { x, y } = playerPos;
		if (y === 0) return;
		const newMaze = mazeData.map((row) => [...row]); // deep copy
		newMaze[x][y] = "empty";
		newMaze[x + 1][y] = "player";
		setMazeData(newMaze);
		setPlayerPos({ x: x + 1, y });
	};

	const renderCell = (cell, i, j) => {
		if (cell === "player") {
			return (
				<div
					key={`${i}-${j}`}
					className="w-14 h-14 border bg-yellow-500 text-center"
				>
					{" "}
				</div>
			);
		}
		if (cell === "exit") {
			return (
				<div key={`${i}-${j}`} className="w-14 h-14 border bg-orange-600"></div>
			);
		}
		return (
			<div key={`${i}-${j}`} className="w-14 h-14 border bg-gray-300"></div>
		);
	};

	return (
		<>
			<h1>Maze</h1>
			<div className="flex flex-col w-1/2 mx-auto">
				<input
					value={rowsInput}
					onChange={(e) => setRowsInput(e.target.value)}
					type="number"
				/>
				<input
					value={colsInput}
					onChange={(e) => setColsInput(e.target.value)}
					type="number"
				/>
				<button onClick={generateMaze}>Generate Maze</button>
			</div>

			<div className="w-1/2 mx-auto mt-4">
				{mazeData.map((row, i) => (
					<div key={`row-${i}`} className="flex">
						{row.map((cell, j) => renderCell(cell, i, j))}
					</div>
				))}
			</div>

			<h2 className="text-center mt-4">
				Player is at ({playerPos.x}, {playerPos.y})
			</h2>
			<div className="text-center">
				<button onClick={moveLeft} className="p-2 bg-blue-500 text-white mt-2">
					Left
				</button>
				<button onClick={moveRight} className="p-2 bg-blue-500 text-white mt-2">
					Right
				</button>
				<button onClick={moveUp} className="p-2 bg-blue-500 text-white mt-2">
					Up
				</button>
				<button onClick={moveDown} className="p-2 bg-blue-500 text-white mt-2">
					Down
				</button>
			</div>
		</>
	);
};

export default Maze;
