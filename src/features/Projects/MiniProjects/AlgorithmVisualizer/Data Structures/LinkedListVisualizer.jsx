import { useState } from "react"

function Node ({id, isHead, value, next, colorClassName}) {
    return (
        <>
            {isHead && 
                <div className={`w-10 h-10 p-8 ${colorClassName} border-4 border-red-400 text-black font-bold flex justify-center items-center`}>
                    {id} - ({value})
                </div> }
            {!isHead &&<div className={`w-10 h-10 p-8 ${colorClassName} text-white font-bold flex justify-center items-center`}>
                {id} - ({value})
            </div>}
            <div>{next && <div className="mx-2 text-2xl">➡️</div>}</div>
        </>
    )
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
	

    const [linkedList, setLinkedList] = useState([])
	const [nodeToPush, setNodeToPush] = useState("");
	const [nodeToPop, setNodeToPop] = useState("");
	const [error, setErrorMsg] = useState("");
    const [setAsHead, setSetAsHead] = useState(false);

    var head = linkedList.length > 0 ? linkedList[0].id: "Linked List has no head"
    const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];

    const CustomAddNode = ({ label, value, onChange }) => (
        <label>
            {label}
            <input type="text" value={value} onChange={onChange} />
        </label>
    );

    const CustomRemoveNode = ({ label, value, onChange }) => (
        <label>
            {label}
            <input type="text" value={value} onChange={onChange} />
        </label>
    );

    // Helper functions
    const getHead = (list) => list.length > 0 ? list[0] : null;
    const getTail = (list) => list.length > 0 ? list[list.length - 1] : null;
    const getSize = (list) => list.length;
    const findNodeById = (list, id) => list.find(node => node.id === id) || null;

    // Append function
    const append = () => {
        const newId = getSize(linkedList) === 0 ? 1 : getTail(linkedList).id + 1;
        const newNode = {
            id: newId,
            isHead: false,
            value: newId * 10,
            colorClassName: randomColor,
            next: null
        };

        if (nodeToPush === "") {
            if (getSize(linkedList) === 0) {
                newNode.isHead = true; // First node becomes head
                setLinkedList([newNode]);
            } else {
                const tail = getTail(linkedList);
                tail.next = newNode.id;
                setLinkedList([...linkedList, newNode]);
            }
        }
        
    };


    // Remove function
    const remove = () => {
        if (nodeToPop === "") {
            if (getSize(linkedList) === 0) {
                setErrorMsg("Nothing to remove");
                return;
            }

            if (getSize(linkedList) === 1) {
                setLinkedList([]); // remove only node
                return;
            }
            const secondLastNode = linkedList[getSize(linkedList) - 2];
            secondLastNode.next = null;
            setLinkedList(linkedList.slice(0, -1)); // remove last
        }
    };


    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex gap-2 mb-4">
                    {
                    linkedList.map((node,index) => (
                        <Node 
                            key={node.id} 
                            id={node.id}
                            colorClassName={node.colorClassName} 
                            value={node.value} 
                            next={node.next} 
                            isHead={index === 0}
                        />))}
                </div>
                
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-2">
                        <CustomAddNode
                            label="Add node at position: "
                            value={nodeToPush}
                            onChange={(e) => setNodeToPush(e.target.value)}
                        />
                        <label>
                            <input
                                type="checkbox"
                                checked={setAsHead}
                                onChange={(e) => setSetAsHead(e.target.checked)}
                                />
                                Set as Head
                        </label>
                    </div>
                    <CustomRemoveNode
                        label="Remove node at position: "
                        value={nodeToPop}
                        onChange={(e) => setNodeToPop(e.target.value)}
                    />


                    <button onClick={append} className="p-2 bg-green-500 text-white rounded"> Append</button>
                    <button onClick={remove} className="p-2 bg-red-500 text-white rounded"> Remove </button>
                </div>

                <div>
                    <h1>Head: {head}</h1>
                    <h1>{error}</h1>
                </div>
            </div>
        </>
    )
}

export default LinkedListVisualizer