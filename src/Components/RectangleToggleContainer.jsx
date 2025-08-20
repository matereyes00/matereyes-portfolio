import {
	faArrowCircleDown,
	faArrowDown,
	faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const RectangleContainerToggle = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const showDescription = () => {
		setIsVisible(!isVisible);
	};

	return (
		<>
			<div className={props.containerStyle}>
				<h1 className="text-5xl">{props.title}</h1>
				{isVisible && (
					<div className={props.imageStyle}>
						<div>{props.images}</div>
						{props.imagesOrigLayout}
						{props.content}
					</div>
				)}
				<button onClick={showDescription}>
					{isVisible ? (
						<FontAwesomeIcon
							icon={faArrowUp}
							size="2x"
							style={{ color: "black" }}
						/>
					) : (
						<FontAwesomeIcon
							icon={faArrowDown}
							size="2x"
							style={{ color: "black" }}
						/>
					)}
				</button>
			</div>
		</>
	);
};

export default RectangleContainerToggle;
