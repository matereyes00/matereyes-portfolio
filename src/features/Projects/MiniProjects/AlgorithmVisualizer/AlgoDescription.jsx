import React from "react";

const Description = (props) => {
	var description = "";
	if (props.type === "array") {
		description =
			"An array is a data structure used to store elements in a particular order. Elements can be pushed or popped. Pushing elements mean adding elements while popping elements mean removing elements. An array is differs from a stack because it needs not to follow the LIFO (last in, first out) principle.";
	} else if (props.type === "stack") {
		description =
			"A stack is similar to an array but follows the last in, first out (LIFO) principle.";
	} else if (props.type === "linked list") {
		description = "A linked list is "
	} else if (props.type === "queue") {
		description = "A queue follows the  "
	}

	return (
		<>
			<p>{description}</p>
		</>
	);
};

export default Description;
