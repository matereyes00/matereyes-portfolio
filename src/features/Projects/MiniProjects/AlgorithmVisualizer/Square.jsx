function Square({ colorClassName, label }) {
	return (
		<div
			className={`w-10 h-10 ${colorClassName} text-white font-bold flex justify-center items-center`}
		>
			{label}
		</div>
	);
}

export default Square;
