import { Label, Input } from "react-aria-components";
import { React, useId } from "react";

function NameTextField() {
	const textiFieldId = useId();
	return (
		<>
			<label>
				Name:
				<input type="text" aria-describedby={textiFieldId} />
			</label>
		</>
	);
}

const ReactPractice = () => {
	return (
		<>
			<div className="bg-[#F0F5F1] p-10">
				<h2 className="p-5">First Name</h2>
				<NameTextField />
				<h2 className="p-5">Last Name</h2>
				<NameTextField />
			</div>
		</>
	);
};

export default ReactPractice;
