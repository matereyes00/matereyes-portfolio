const CustomInputField = ({ label, type, value, onChange }) => {
	return (
		<>
			<label>
				{label}
				<input
					type={type}
					value={value}
					onChange={onChange}
					className="w-10 rounded-md"
				/>
			</label>
		</>
	);
};

export default CustomInputField;
