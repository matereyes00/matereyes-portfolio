import React from "react";
import poveda_grad from "../../Assets/mate-ps/pov-19-grad.JPEG";
import bs_admu_grad from "../../Assets/mate-ps/bs-admu-grad.JPEG";
import ico_ph from "../../Assets/mate-ps/mate-icoph.jpg";
import compsat_workshop from "../../Assets/mate-ps/compsat-git-workshop.JPG";
import compsat_dp from "../../Assets/decentmate.jpg";
import ubx_ps from "../../Assets/mate-ps/mate-ubx.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTrain } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import RectangleContainerToggle from "../../Components/RectangleToggleContainer";

const EventText = () => {
	const content = (
		<p>
			Hi! I'm Martina Reyes and I'm 24 years old. My nickname is Matê and my
			preferred pronouns are she/her. I graduated high school from Saint Pedro
			Poveda College in 2019. I completed undergraduate degree as cum laude in
			Bachelor of Science in Computer Science with a specialization in Data
			Science and Analytics from the Ateneo de Manila University. I took my
			Master of Science degree in Computer Science at Ateneo de Manila
			University. During the last leg of the degree, I started working as a
			Junior Software Engineer at UBX.
		</p>
	);

	const content2 = (
		<p>
			I had no prior experience in coding entering college. Half of my college
			experience was spent at home during the COVID-19 pandemic. I exposed
			myself to the industry as much as I could by joining workshops hosted by
			our home organization - Computer Society of the Ateneo (CompSAt) and
			projects that exposed me to web development and use different web
			frameworks. I took a few online courses on HTML, CSS, and JavaScript and
			electives my course had to offer. I learned a great deal about the
			importance of web accessibility. I also got exposed to the UX research
			process through my invovement with User Experience Society and my Human
			Computer Interaction class. These taught me the importance of prioritizing
			users' needs for any system. The work-from-home set-up taught me to be as
			resourceful and resilient when it came to learning a new skill.
		</p>
	);

	const content3 = (
		<p>
			I aspire for a career in Data Science and/or Software Engineering. I enjoy
			learning and using online courses to upskill myself in different industry
			tools. My first internship was working remotely as a Data Analyst at
			Dashlabs.AI, a local health software company. A few months later, I got
			another remote internship as a Frontend and Data intern at a start-up
			called WiV, a wine investment company.
		</p>
	);

	const content4 = (
		<p>
			I took up my Master of Science degree in Computer Science. I chose to take
			this to further improve on working as an individual and expand on my
			undergraduate thesis on a national scale. I took a Data Science
			Apprenticeship at Opswerks last February-May 2024 to explore my career
			options. It was a fulfilling experience because it was my first on-site,
			hands-on professional work experience. The overall experience inspired me
			to hone my technical skills and made me realize I work best within a team
			setting. After the apprenticeship, I presented my research on the
			international stage at a public health conference held in Bankok, Thailand
			last August 2024.
		</p>
	);

	const content5 = (
		<p>
			I am working as a Junior Software Engineer at UBX. I intend to focus on my
			career. I've been interested in taking on a full-stack developer or data
			science roles. My personal goal is to use the knowledge, skills, and
			understanding learned in my field to help other people. I advocate for
			creating a positive social impact through my work and the skills I have to
			offer. I work well individually but perfer working collaboratively on a
			team. I empathize with others, value inclusive environments and adapt a
			growth mindset in any project or task I partake in.
		</p>
	);

	const content6 = (
		<p className="my-auto md:text-left">
			In my third year, I was{" "}
			<a
				href="https://feature-about-page-ebac-22--compsat.netlify.app/about"
				className="underline"
			>
				Secretary-General of CompSAt
			</a>
			. I worked alongside different departments that led the organization. My
			main tasks were internal-based: to document what was happening in the org
			for the other departments. I was given the opportunity to lead a project
			that revived an old newsletter of the organization: Compress. The team was
			made of designers and writers and led by the Documentations and Creatives
			Department of the org. The aim was to showcase what the organization was
			all about, given the social-distancing aspect.
		</p>
	);

	return (
		<>
			<RectangleContainerToggle
				title="Introduction"
				content={content}
				images={
					<>
						<img
							src={poveda_grad}
							alt="Poveda Graduation 2019"
							className="w-1/5 mx-auto my-2 md:mx-2"
						/>
						<img
							src={bs_admu_grad}
							alt="Ateneo Graduation 2023"
							className="w-1/5 mx-auto my-2 md:mx-2"
						/>
						
					</>
				}
				containerStyle="md:flex md:flex-wrap flex-col items-center mx-5 my-5 text-blue-950 bg-opacity-60 border-2 border-slate-900 rounded-xl"
			/>

			<FontAwesomeIcon icon={faTrain} size="3x" style={{ color: "black" }} />

			<RectangleContainerToggle
				title="Discovery"
				content={content2}
				images={
					<>
						<img
							src={compsat_workshop}
							alt="CompSAt Git Workshop 2019"
							className="h-1/5 w-1/5 mx-auto my-2"
						/>
					</>
				}
				containerStyle="md:flex flex-col items-center mx-5 my-5 bg-opacity-60  border-2 border-slate-900 rounded-xl"
			/>

			<FontAwesomeIcon
				icon={faLocationDot}
				size="3x"
				style={{ color: "black" }}
			/>

			<RectangleContainerToggle
				title="Org life"
				content={content6}
				images={
					<img
						src={compsat_dp}
						alt="CompSAt 2021 FB DP"
						className="mx-auto w-1/5 h-1/5 my-2 md:mx-4"
					/>
				}
				containerStyle="md:flex flex-col items-center mx-5 my-5 text-blue-950 bg-opacity-60  border-2 border-slate-900 rounded-xl"
			/>

			<FontAwesomeIcon icon={faCoffee} size="3x" style={{ color: "black" }} />

			<RectangleContainerToggle
				title="Side quests"
				content={content3}
				containerStyle="flex flex-col items-center mx-5 my-5 bg-opacity-60  border-2 border-slate-900 rounded-xl"
			/>

			<FontAwesomeIcon icon={faTrain} size="3x" style={{ color: "black" }} />

			<RectangleContainerToggle
				title="Student becomes the Master"
				images={
					<>
						<img
							src={ico_ph}
							alt="ICOPH 2024 Conference"
							className="h-1/5 w-1/5 mx-auto my-2"
						/>
					</>
				}
				content={content4}
				paragraphStyle="my-auto text-center md:text-left"
				containerStyle="md:flex flex-col items-center mx-5 my-5  text-blue-950 bg-opacity-60  border-2 border-slate-900 rounded-xl"
			/>

			<FontAwesomeIcon
				icon={faLocationDot}
				size="3x"
				style={{ color: "black" }}
			/>

			<RectangleContainerToggle
				title="Where is she now?"
				images={
					<img
						src={ubx_ps}
						alt="UBX Photoshoot"
						className="h-1/3 w-1/3 mx-auto"
					/>
				}
				content={content5}
				containerStyle="mx-5 my-5 bg-opacity-60  md:flex md:flex-col items-center border-2 border-slate-900 rounded-xl"
			/>
		</>
	);
};

export default EventText;
