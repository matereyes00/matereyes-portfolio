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
  const [nodeToPush, setNodeToPush] = useState("");
  const [nodeToPop, setNodeToPop] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [error, setErrorMsg] = useState("");
  const [setAsHead, setSetAsHead] = useState(false);

  const head = linkedList.length > 0 ? linkedList[0].id : "Linked List has no head";

  // Helpers
  const getHead = (list) => (list.length > 0 ? list[0] : null);
  const getTail = (list) => (list.length > 0 ? list[list.length - 1] : null);
  const getSize = (list) => list.length;

  // Append
  const append = () => {
    const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
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
    setErrorMsg("")

    if (nodeToPush === "" && !setAsHead) {
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
    } else if (nodeToPush === "" && setAsHead) {
      // Insert as head
      newNode.isHead = true;
      newNode.next = getHead(linkedList)?.id || null;
      setLinkedList([newNode, ...linkedList]);
    } else {
      // Insert at custom index
      const index = parseInt(nodeToPush, 10);
      if (isNaN(index) || index < 0 || index > linkedList.length) {
        setErrorMsg("Invalid position");
        return;
      }
      const newList = [...linkedList];
      newNode.next = newList[index]?.id || null;
      newList.splice(index, 0, newNode);
      setLinkedList(newList);
    }

    setNodeToPush("");
    setValueInput("");
    setSetAsHead(false);
  };

  const remove = () => {
    if (nodeToPop === "") {
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
      const index = parseInt(nodeToPop, 10);
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
    setNodeToPop("");
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
            Add node at position:{" "}
            <input
              type="text"
              value={nodeToPush}
              onChange={(e) => setNodeToPush(e.target.value)}
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
          Remove node at position:{" "}
          <input
            type="text"
            value={nodeToPop}
            onChange={(e) => setNodeToPop(e.target.value)}
            className="w-10 rounded-md"
          />
        </label>

        <label>
          Value of node:{" "}
          <input
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            className="w-10 rounded-md"
          />
        </label>

        <button onClick={append} className="p-2 bg-green-500 text-white rounded">
          Append
        </button>
        <button onClick={remove} className="p-2 bg-red-500 text-white rounded">
          Remove
        </button>
      </div>

      <div>
        <h1>Head: {head}</h1>
        <h1 className="text-red-600 font-bold">{error}</h1>
      </div>
    </div>
  );
};

export default LinkedListVisualizer;
