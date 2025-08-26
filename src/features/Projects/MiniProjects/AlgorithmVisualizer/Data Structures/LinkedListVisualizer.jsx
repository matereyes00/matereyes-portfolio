import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Node({ id, isHead, value, next, colorClassName, index }) {
	return (
		<>
			<div>
				{isHead ? (
					<div
						className={`w-10 h-10 p-10 ${colorClassName} border-8 border-red-700 text-black font-bold flex flex-col justify-center items-center`}
					>
						<p className="text-[6px]">{id}</p>
						<p>{value}</p>
					</div>
				) : (
					<div
						className={`w-10 h-10 p-10 ${colorClassName} text-white font-bold flex flex-col justify-center items-center`}
					>
						<p className="text-[6px]">{id}</p>
						<p>{value}</p>
					</div>
				)}
				<p className="text-[11px]">Pos: {index}</p>
			</div>
			<div>{next && <div className="mx-2 text-2xl">➡️</div>}</div>
		</>
	);
}

const LinkedListVisualizer = () => {
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

	const [linkedList, setLinkedList] = useState([]);
	const [nodeToPushPop, setNodeToPushPop] = useState("");
	const [valueInput, setValueInput] = useState("");
	const [error, setErrorMsg] = useState("");
	const [setAsHead, setSetAsHead] = useState(false);

	const head =
		linkedList.length > 0 ? linkedList[0].id : "Linked List has no head";

	const getHead = (list) => (list.length > 0 ? list[0] : null);
	const getTail = (list) => (list.length > 0 ? list[list.length - 1] : null);
	const getSize = (list) => list.length;

	const append = () => {
		const randomColor =
			colorClasses[Math.floor(Math.random() * colorClasses.length)];
		const val =
			valueInput.trim() !== ""
				? valueInput
				: getSize(linkedList) === 0
					? 1
					: Number(getTail(linkedList).value) + 1;

		const newNode = {
			id: uuidv4(),
			isHead: false,
			value: val,
			colorClassName: randomColor,
			next: null,
		};
		setErrorMsg("");

		if (nodeToPushPop === "" && !setAsHead) {
			// Normal append
			if (getSize(linkedList) === 0) {
				newNode.isHead = true;
				setLinkedList([newNode]);
			} else {
				const newList = [...linkedList];
				newList[newList.length - 1].next = newNode.id;
				newList.push(newNode);
				setLinkedList(newList);
			}
		} else if (nodeToPushPop === "" && setAsHead) {
			// Insert as head
			newNode.isHead = true;
			newNode.next = getHead(linkedList)?.id || null;
			setLinkedList([newNode, ...linkedList]);
		} else {
			// Insert at custom index
			const index = parseInt(nodeToPushPop, 10);
			if (isNaN(index) || index < 0 || index > linkedList.length) {
				setErrorMsg("Invalid position");
				return;
			}
			const newList = [...linkedList];
			newNode.next = newList[index]?.id || null;
			newList.splice(index, 0, newNode);
			setLinkedList(newList);
		}

		setNodeToPushPop("");
		setValueInput("");
		setSetAsHead(false);
	};

	const remove = () => {
		if (nodeToPushPop === "") {
			if (getSize(linkedList) === 0) {
				setErrorMsg("Nothing to remove");
				return;
			}
			if (getSize(linkedList) === 1) {
				setLinkedList([]);
				return;
			}
			const newList = [...linkedList];
			newList[newList.length - 2].next = null;
			newList.pop();
			setLinkedList(newList);
		} else {
			const index = parseInt(nodeToPushPop, 10);
			if (isNaN(index) || index < 0 || index >= linkedList.length) {
				setErrorMsg("Invalid position");
				return;
			}
			const newList = [...linkedList];
			if (index > 0) {
				newList[index - 1].next = newList[index + 1]?.id || null;
			}
			newList.splice(index, 1);
			setLinkedList(newList);
		}
		setNodeToPushPop("");
	};

	// Update Node Value
	// Let users modify the value at a certain position.
	// Shows that random access is not direct like arrays.
	const edit = () => {
		const newLinkedList = [...linkedList];
		const position = parseInt(nodeToPushPop, 10);
		if (isNaN(position) || position < 0 || position >= linkedList.length) {
			setErrorMsg("Invalid position");
			return;
		}
		var nodeToReplace = linkedList[position];
		nodeToReplace.value = valueInput;
		newLinkedList.splice(position, 1, { ...nodeToReplace, value: valueInput });
		setLinkedList(newLinkedList);
		setNodeToPushPop("");
		setValueInput("");
		setSetAsHead(false);
	};

	const clear = () => {
		setLinkedList([]);
		setErrorMsg("");
	};

	return (
		<div className="flex flex-col items-center">
			<div className="flex gap-2 mb-4">
				{linkedList.map((node, index) => (
					<Node
						key={index}
						id={node.id}
						colorClassName={node.colorClassName}
						value={node.value}
						next={node.next}
						isHead={index === 0}
						index={index}
					/>
				))}
			</div>
			<div className="flex flex-col gap-3">
				<div className="flex flex-row gap-2">
					<label>
						Node at position:{" "}
						<input
							type="text"
							value={nodeToPushPop}
							onChange={(e) => setNodeToPushPop(e.target.value)}
							className="w-10 rounded-md"
						/>
					</label>
					<label>
						<input
							type="checkbox"
							checked={setAsHead}
							onChange={(e) => setSetAsHead(e.target.checked)}
						/>
						Set as Head
					</label>
				</div>

				<label>
					Value of node:{" "}
					<input
						type="text"
						value={valueInput}
						onChange={(e) => setValueInput(e.target.value)}
						className="w-10 rounded-md"
					/>
				</label>

				<button
					onClick={append}
					className="p-2 bg-green-500 text-white rounded"
				>
					Append
				</button>
				<button onClick={remove} className="p-2 bg-red-500 text-white rounded">
					Remove
				</button>
				<button onClick={edit} className="p-2 bg-blue-500 text-white rounded">
					Edit
				</button>
				<button
					onClick={clear}
					className="p-2 border-2 border-red-800 text-black font-bold rounded"
				>
					Clear
				</button>
			</div>

			<div>
				<h1>Head: {head}</h1>
				<h1 className="text-red-600 font-bold">{error}</h1>
			</div>
			{/* 🔑 Core Linked List Operations (to implement next) 
      1. Search / Find Allow
			users to type in a value and highlight the node if found. Teaches
			traversal (O(n) lookup). 
      ✅2. Update Node Value Let users modify the value at a
			certain position. Shows that random access is not direct like arrays.
			3. Insert After / Before Value Instead of inserting by index, insert relative
			to a node with a certain value. Helps connect linked list traversal to
			real-world operations. 
      ✅4. Clear / Reset List Add a button to wipe everything. */}
		</div>
	);
};

export default LinkedListVisualizer;
