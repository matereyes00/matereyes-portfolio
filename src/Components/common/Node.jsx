const Node = ({ id, isHead, value, next, colorClassName, index }) => {
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
};

export default Node;
