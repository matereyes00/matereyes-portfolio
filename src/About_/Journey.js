import React from "react";
import poveda_grad from "../images/mate-ps/pov-19-grad.JPEG";
import bs_admu_grad from "../images/mate-ps/bs-admu-grad.JPEG";
import ico_ph from "../images/mate-ps/mate-icoph.jpg";
import compsat_workshop from "../images/mate-ps/compsat-git-workshop.JPG";
import compsat_dp from "../images/decentmate.jpg";
import ubx_ps from "../images/mate-ps/mate-ubx.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTrain } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const EventText = () => {
	const content =
		"Hi! I'm Martina Reyes and I'm 24 years old. My nickname is Matê and my preferred pronouns are she/her. I graduated high school from Saint Pedro Poveda College in 2019. I completed undergraduate degree as cum laude in Bachelor of Science in Computer Science with a specialization in Data Science and Analytics from the Ateneo de Manila University. I am currently a Master of Science student taking up Computer Science in the same university while working as a Junior Software Engineer at UBX.";

	const content2 =
		"I had no prior experience in coding entering college. Half of my college experience was spent at home during the COVID-19 pandemic, so I decided to expose myself as much as I can during my four years by joining workshops hosted by our home organization - Computer Society of the Ateneo (CompSAt) and projects that exposed me to web development and use different web frameworks. I took a few online courses on HTML, CSS, and JavaScript. I took Web Accessibility and Creative CSS Development electives. I learned how to use React, Django and CSS pre-processors (Tailwind CSS, SASS and STYLUS). I also learned the UX research process through my invovement with User Experience Society and my Human Computer Interaction class. The social-distancing set-up taught me to be as resourceful and resilient when it came to learning a new skill.";

	const content3 =
		"I aspire for a career in Data Science and/or Software Engineering. I enjoy learning and using platforms such as Coursera and Kaggle to increase my Data Science and Analytics skills. I have taken a few database classes that use SQL and noSQL (MongoDB and DynamoDB). I am also familiar with the basic usage of Tableau and Tableau Prep Builder from my Data Visualization elective and my first internship at Dashlabs.ai, a local health software company. A few months later, I got another remote internship as a Frontend and Data intern at a start-up called WiV, a wine investment company.";

	const content4 =
		"Currently, I am taking up my Master of Science degree in computer science. I chose to take this to further improve on working as an individual and expand on my undergraduate thesis on a national scale. I took a Data Science Apprenticeship at Opswerks last February-May 2024 to explore my career options. It was a fulfilling experience because it was my first on-site, hands-on professional work experience. The overall experience inspired me to hone my technical skills and made me realize I work best within a team setting. After the apprenticeship, I presented my research on the international stage at a public health conference held in Bankok, Thailand last August 2024.";

	const content5 =
		"Now, nearly finished with my Master's, I am working as a Junior Software Engineer at UBX. Once I complete my master's, I intend to focus on my career. I've been interested in taking on a full-stack developer role. My personal goal is to use the knowledge, skills, and understanding learned in my field to help other people. I advocate for creating a positive social impact through my work and the skills I have to offer. I work well individually but perfer working collaboratively on a team. I empathize with others, value inclusive environments and adapt a growth mindset in any project or task I partake in.";
	return (
		<>
			<div className="md:flex md:flex-wrap mx-10 my-10  text-blue-950 bg-opacity-60 p-5 border-2 border-slate-900 rounded-xl">
				<div className="hidden md:flex md:flex-wrap md:flex-row justify-center">
					<img
						src={poveda_grad}
						alt="Poveda Graduation 2019"
						className="w-1/5 mx-auto my-2 md:mx-4"
					/>
					<img
						src={bs_admu_grad}
						alt="Ateneo Graduation 2023"
						className="w-1/5 mx-auto my-2 md:mx-4"
					/>
				</div>
				<img
					src={poveda_grad}
					alt="Poveda Graduation 2019"
					className="h-1/2 w-1/2 mx-auto my-2 md:hidden"
				/>
				<p className="">{content}</p>
				<img
					src={bs_admu_grad}
					alt="Ateneo Graduation 2023"
					className="h-1/2 w-1/2 mx-auto my-2 md:hidden"
				/>
			</div>

			<FontAwesomeIcon icon={faTrain} size="3x" style={{ color: "black" }} />

			<div className="md:flex md:flex-row mx-10 my-10 bg-opacity-60 p-5 border-2 border-slate-900 rounded-xl">
				<img
					src={compsat_workshop}
					alt="CompSAt Git Workshop 2019"
					className="h-1/3 w-1/3 mx-auto my-2"
				/>
				<p className="my-auto text-center md:text-right">{content2}</p>
			</div>
			<FontAwesomeIcon
				icon={faLocationDot}
				size="3x"
				style={{ color: "black" }}
			/>
			<div className="md:flex md:flex-row mx-10 my-10  text-blue-950 bg-opacity-60 p-5 border-2 border-slate-900 rounded-xl">
				<p className="my-auto md:text-left">
					In my third year, I was{" "}
					<a
						href="https://feature-about-page-ebac-22--compsat.netlify.app/about"
						className="underline">
						Secretary-General of CompSAt
					</a>
					. I worked alongside different departments that led the organization.
					My main tasks were internal-based: to document what was happening in
					the org for the other departments. I was given the opportunity to lead
					a project that revived an old newsletter of the organization:
					Compress. The team was made of designers and writers and led by the
					Documentations and Creatives Department of the org. The aim was to
					showcase what the organization was all about, given the
					social-distancing aspect.
				</p>
				<img
					src={compsat_dp}
					alt="CompSAt 2021 FB DP"
					className="mx-auto w-1/2 h-1/2 my-2 md:mx-4"
				/>
			</div>
			<FontAwesomeIcon icon={faCoffee} size="3x" style={{ color: "black" }} />

			<div className="flex flex-row mx-10 my-10 bg-opacity-60 p-5 border-2 border-slate-900 rounded-xl">
				<p className="my-auto">{content3}</p>
			</div>
			<FontAwesomeIcon icon={faTrain} size="3x" style={{ color: "black" }} />

			<div className="md:flex md:flex-row mx-10 my-10  text-blue-950 bg-opacity-60 p-5 border-2 border-slate-900 rounded-xl">
				<p className="my-auto text-center md:text-left">{content4}</p>
				<img
					src={ico_ph}
					alt="ICOPH 2024 Conference"
					className="h-1/2 w-1/2 mx-auto my-2"
				/>
			</div>
			<FontAwesomeIcon
				icon={faLocationDot}
				size="3x"
				style={{ color: "black" }}
			/>

			<div className="mx-10 my-10 bg-opacity-60 p-5 md:flex md:flex-row  border-2 border-slate-900 rounded-xl">
				<img
					src={ubx_ps}
					alt="UBX Photoshoot"
					className="h-1/3 w-1/3 mx-auto"
				/>
				<p className="my-auto text-center md:text-right ">{content5}</p>
			</div>
		</>
	);
};

export default EventText;
