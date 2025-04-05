import React, { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const Maze = () => {
	const [rowsInput, setRowsInput] = useState(10);
	const [colsInput, setColsInput] = useState(10);
	const [congratsMessage, setCongratsMessage] = useState("");
	const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
	const [exitPos, setExitPos] = useState({ x: 0, y: 0 });
	const [treasurePos, setTreasurePos] = useState({ x: 0, y: 0 });
	const [monsterPos, setMonsterPos] = useState({ x: 0, y: 0 });
	const [mazeData, setMazeData] = useState([]); // <-- this stores "player", "exit", or "empty"

	const [playerPoints, setPlayerPoints] = useState(0);

	const { width, height } = useWindowSize();
	const confetti = <Confetti width={width} height={height} />;
	const [startConfetti, setConfetti] = useState("");

	const generateMaze = () => {
		setCongratsMessage("");
		setConfetti("");
		setPlayerPoints(0);
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
		let treasure = randCoord();
		let monster = randCoord();
		// treasure
		// monster
		while (exit.x === player.x && exit.y === player.y) {
			exit = randCoord();
		}

		newMaze[player.x][player.y] = "player";
		newMaze[exit.x][exit.y] = "exit";
		newMaze[treasure.x][treasure.y] = "treasure";
		newMaze[monster.x][monster.y] = "monster";

		setMazeData(newMaze);
		setPlayerPos(player);
		setTreasurePos(treasure);
		setMonsterPos(monster);
		setExitPos(exit);
	};

	const moveLeft = () => {
		const { x, y } = playerPos;
		if (y <= 0) return;
		const newMaze = mazeData.map((row) => [...row]); // deep copy
		const nextCell = mazeData[x][y - 1];
		if (nextCell === "exit") {
			setCongratsMessage("🎉 Player reached the exit!");
			setConfetti(confetti);
		}
		if (nextCell === "treasure") {
			setPlayerPoints((prevPt) => prevPt + 5);
		}
		newMaze[x][y] = "empty";
		newMaze[x][y - 1] = "player";
		let playerCoords = { x, y: y - 1 };
		renderMaze(newMaze, playerCoords);
	};

	const moveRight = () => {
		const { x, y } = playerPos;
		// check if current row exists
		if (!mazeData[x]) return;

		// check if y is within bounds
		if (y >= mazeData[x].length - 1) return;
		const newMaze = mazeData.map((row) => [...row]); // deep copy

		const nextCell = mazeData[x][y + 1];
		if (nextCell === "exit") {
			setCongratsMessage("🎉 Player reached the exit!");
			setConfetti(confetti);
		}
		if (nextCell === "treasure") {
			setPlayerPoints((prevPt) => prevPt + 5);
		}

		// keep moving if not yet exit
		newMaze[x][y] = "empty";
		newMaze[x][y + 1] = "player";
		let playerCoords = { x, y: y + 1 };
		renderMaze(newMaze, playerCoords);
	};

	const moveUp = () => {
		const { x, y } = playerPos;
		if (x <= 0) return;
		const newMaze = mazeData.map((row) => [...row]); // deep copy
		const nextCell = mazeData[x - 1][y];
		if (nextCell === "exit") {
			setCongratsMessage("🎉 Player reached the exit!");
			setConfetti(confetti);
		}
		if (nextCell === "treasure") {
			setPlayerPoints((prevPt) => prevPt + 5);
		}
		newMaze[x][y] = "empty";
		newMaze[x - 1][y] = "player";
		let playerCoords = { x: x - 1, y };
		renderMaze(newMaze, playerCoords);
	};

	const moveDown = () => {
		const { x, y } = playerPos;
		// Check if moving down stays within the maze bounds
		if (x >= mazeData.length - 1) return;
		// Also, make sure the row we're about to access exists
		if (!mazeData[x + 1] || !mazeData[x + 1][y]) return;
		const newMaze = mazeData.map((row) => [...row]); // deep copy

		const nextCell = mazeData[x + 1][y];
		if (nextCell === "exit") {
			setCongratsMessage("🎉 Player reached the exit!");
			setConfetti(confetti);
		}
		if (nextCell === "treasure") {
			setPlayerPoints((prevPt) => prevPt + 5);
		}

		// keep moving if not yet exit
		newMaze[x][y] = "empty";
		newMaze[x + 1][y] = "player";
		let playerCoords = { x: x + 1, y };
		renderMaze(newMaze, playerCoords);
	};

	const renderMaze = (newMaze, playerCoords) => {
		setMazeData(newMaze);
		setPlayerPos(playerCoords);
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
		if (cell === "monster") {
			return (
				<div
					key={`${i}-${j}`}
					className="w-14 h-14 border bg-gray-300 text-5xl"
				>
					👹
				</div>
			);
		}
		if (cell === "treasure") {
			return (
				<div
					key={`${i}-${j}`}
					className="w-14 h-14 border bg-gray-300 text-5xl"
				>
					💰
				</div>
			);
		}
		return (
			<div key={`${i}-${j}`} className="w-14 h-14 border bg-gray-300"></div>
		);
	};

	return (
		<>
			<h1 className="text-5xl">Maze 2.0</h1>
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
				<button
					onClick={generateMaze}
					className="p-2 bg-blue-500 text-white mt-2"
				>
					Generate Maze
				</button>
			</div>

			<div>
				<h1 className="text-3xl">{congratsMessage}</h1>
				{startConfetti}
				<h1>{playerPoints}</h1>
			</div>

			<div className="mx-auto mt-4">
				{mazeData.map((row, i) => (
					<div key={`row-${i}`} className="flex">
						{row.map((cell, j) => renderCell(cell, i, j))}
					</div>
				))}
			</div>

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
