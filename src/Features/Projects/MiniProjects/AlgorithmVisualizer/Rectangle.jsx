function Rectangle({ colorClassName, label }) {
	return (
		<div
			className={`w-full h-5 ${colorClassName} text-white font-bold flex justify-center items-center`}
		>
			{label}
		</div>
	);
}

export default Rectangle;
