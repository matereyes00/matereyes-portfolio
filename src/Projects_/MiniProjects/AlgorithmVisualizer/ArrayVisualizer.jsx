import { useState } from "react";
import Square from "./Square";

const ArrayVisualizer = () => {
  const colorClasses = [
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-teal-400"
  ];

  const [squares, setSquares] = useState(colorClasses);

  const pushSquare = () => {
    const randomColor =
      colorClasses[Math.floor(Math.random() * colorClasses.length)];
    setSquares([...squares, randomColor]);
  };

  const popSquare = () => {
    setSquares(squares.slice(0, -1));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 mb-4">
        {squares.map((className, idx) => (
          <Square key={idx} colorClassName={className} />
        ))}
      </div>

      <div>
        <button
          onClick={pushSquare}
          className="p-2 bg-green-500 text-white rounded mr-2"
        >
          Push
        </button>
        <button
          onClick={popSquare}
          className="p-2 bg-red-500 text-white rounded"
        >
          Pop
        </button>
      </div>
    </div>
  );
};

export default ArrayVisualizer;
