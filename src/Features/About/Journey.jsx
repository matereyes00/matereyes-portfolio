import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Adjust this relative path to your client-side firebase config

import poveda_grad from "../../Assets/mate-ps/pov-19-grad.JPEG";
import bs_admu_grad from "../../Assets/mate-ps/bs-admu-grad.JPEG";
import ms_admu_grad from "../../Assets/mate-ps/ms-admu-grad-ps.jpg";
import ico_ph from "../../Assets/mate-ps/mate-icoph.jpg";
import compsat_workshop from "../../Assets/mate-ps/compsat-git-workshop.JPG";
import compsat_dp from "../../Assets/decentmate.jpg";
import ubx_ps from "../../Assets/mate-ps/mate-ubx.jpg";
import mate_aus from "../../Assets/mate-aus.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faTrain,
	faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import RectangleContainerToggle from "../../Components/RectangleToggleContainer";

const EventText = () => {
	const [aboutSections, setAboutSections] = useState([]);
	const [loading, setLoading] = useState(true);

	const containerStyle =
		"md:flex md:flex-wrap flex-col items-center mx-5 my-5 p-5 bg-opacity-60 border-2 border-slate-900 rounded-xl";
	const containerImgStyle = "h-1/5 w-1/5 mx-auto my-2 p-4";

	// Mapping sectionKey from Firestore to local image elements & custom titles
	const SECTION_CONFIG = {
		intro: {
			displayTitle: "Introduction",
			images: (
				<>
					<img
						src={poveda_grad}
						alt="Poveda Graduation 2019"
						className={containerImgStyle}
					/>
					<img
						src={bs_admu_grad}
						alt="Ateneo Graduation 2023"
						className={containerImgStyle}
					/>
					<img
						src={ms_admu_grad}
						alt="Ateneo Graduation 2025"
						className={containerImgStyle}
					/>
				</>
			),
			icon: faTrain,
		},
		college_journey: {
			displayTitle: "Discovery",
			images: (
				<img
					src={compsat_workshop}
					alt="CompSAt Git Workshop 2019"
					className="h-1/5 w-1/5 mx-auto my-2"
				/>
			),
			icon: faLocationDot,
		},
		student_orgs: {
			displayTitle: "Org life",
			images: (
				<img
					src={compsat_dp}
					alt="CompSAt 2021 FB DP"
					className="mx-auto w-1/5 h-1/5 my-2"
				/>
			),
			icon: faCoffee,
		},
		internships: {
			displayTitle: "Side quests",
			images: null,
			icon: faTrain,
		},
		masters_degree: {
			displayTitle: "Student becomes the Master",
			images: (
				<img
					src={ico_ph}
					alt="ICOPH 2024 Conference"
					className={containerImgStyle}
				/>
			),
			icon: faLocationDot,
		},
		ubx_work: {
			displayTitle: "First 9 to 5",
			images: (
				<img
					src={ubx_ps}
					alt="UBX Photoshoot"
					className={containerImgStyle}
				/>
			),
			icon: null,
		},
		australia: {
			displayTitle: "A few timezones away from home",
			images: (
				<img
					src={mate_aus}
					alt="Mate in Australia"
					className={containerImgStyle}
				/>
			),
			icon: faLocationDot,
		},
	};

	useEffect(() => {
		const fetchAboutData = async () => {
			try {
				const aboutRef = collection(db, "aboutContent");
				const q = query(aboutRef, orderBy("order", "asc"));
				const querySnapshot = await getDocs(q);

				const data = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				setAboutSections(data);
			} catch (error) {
				console.error(
					"Error fetching about data from Firestore:",
					error,
				);
			} finally {
				setLoading(false);
			}
		};

		fetchAboutData();
	}, []);

	if (loading) {
		return <div className="text-center my-10">Loading timeline...</div>;
	}

	return (
		<>
			{aboutSections.map((section) => {
				const config = SECTION_CONFIG[section.sectionKey] || {};

				return (
					<React.Fragment key={section.id || section.order}>
						<RectangleContainerToggle
							title={config.displayTitle || section.title}
							content={
								<div className="my-auto md:text-left">
									<ReactMarkdown>
										{section.content}
									</ReactMarkdown>
								</div>
							}
							images={config.images}
							containerStyle={containerStyle}
						/>

						{config.icon && (
							<FontAwesomeIcon
								icon={config.icon}
								size="3x"
								style={{ color: "black" }}
							/>
						)}
					</React.Fragment>
				);
			})}
		</>
	);
};

export default EventText;
