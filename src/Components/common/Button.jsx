const SubmitButton = ({ func, styling, btnText }) => {
	return (
		<>
			<button onClick={func} className={styling}>
				{btnText}
			</button>
		</>
	);
};

export default SubmitButton;
