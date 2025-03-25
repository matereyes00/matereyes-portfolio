// src/about/Stack.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StackItem = ({ ItemName, image }) => {
	return (
		<img src={image} alt={ItemName} className="mx-auto my-auto w-1/3 h-1/3" />
	);
};

export default StackItem;
