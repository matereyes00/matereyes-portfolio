import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const RectangleContainerToggle = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const showDescription = () => {
		setIsVisible(!isVisible);
	};

	return (
		<>
			<div
				className={props.containerStyle}
				style={{
					backgroundColor: "#e5e5f7",
					backgroundSize: "20px 20px",
					backgroundImage:
						"repeating-linear-gradient(0deg, #444cf7, #444cf7 1px, #e5e5f7 1px, #e5e5f7)",
					boxShadow: "inset 0 0 0 9999px rgba(255,255,255,0.3)",
				}}
			>
				<div className="">
					<h1 className="text-5xl">{props.title}</h1>
					<button className="mt-4" onClick={showDescription}>
						{isVisible ? (
							<FontAwesomeIcon
								icon={faArrowUp}
								size="2x"
								style={{ color: "#0f172a" }}
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

				{isVisible && (
					<div className={props.imageStyle}>
						<div>{props.images}</div>
						{props.imagesOrigLayout}
						<div className="text-xl">{props.content}</div>
					</div>
				)}
			</div>
		</>
	);
};

export default RectangleContainerToggle;
