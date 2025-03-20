// src/about/Stack.js
import React from "react";

const StackItem = ({ ItemName, image }) => {
	return (
		<div className="block md:flex md:flex-row rounded-3 w-2/3">
			<div className="my-auto mx-auto h-4/5 w-4/5 md:basis:3xs w-1/3">
				<img
					src={image}
					alt={ItemName}
					className="mx-auto my-auto h-3/5 w-3/5"
				/>
			</div>
			<div className="md:mr-2 md:content-center mx-auto mt-5 md:basis-xl w-2/3">
				<h3 className="text-xl md:text-md font-bold">{ItemName}</h3>
				{/* <h3>Item category</h3> */}
			</div>
		</div>
	);
};

export default StackItem;
