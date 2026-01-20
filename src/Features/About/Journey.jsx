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
		<p className="my-auto md:text-left">
			Hi! I'm Martina Reyes and I'm 25 years old. My nickname is Matê and
			my preferred pronouns are she/her. I graduated high school from
			Saint Pedro Poveda College in 2019. I completed undergraduate degree
			as cum laude in Bachelor of Science in Computer Science with a
			specialization in Data Science and Analytics from the Ateneo de
			Manila University. I took my Master of Science degree in Computer
			Science at Ateneo de Manila University. During the last leg of the
			degree, I worked as a Junior Software Engineer at UBX for a year.
		</p>
	);

	const content2 = (
		<p className="my-auto md:text-left">
			I had no prior experience in coding entering college. Half of my
			college experience was spent at home during the COVID-19 pandemic. I
			exposed myself to the industry as much as I could by joining
			workshops hosted by our home organization - Computer Society of the
			Ateneo (CompSAt) and projects that exposed me to web development and
			use different web frameworks. I took a few online courses on HTML,
			CSS, and JavaScript and electives my course had to offer. I learned
			a great deal about the importance of web accessibility. I also got
			exposed to the UX research process through my invovement with User
			Experience Society and my Human Computer Interaction class. These
			taught me the importance of prioritizing users' needs for any
			system. The work-from-home set-up taught me to be as resourceful and
			resilient when it came to learning a new skill.
		</p>
	);

	const content3 = (
		<p className="my-auto md:text-left">
			I aspire for a career in Data Science and/or Software Engineering. I
			enjoy learning and using online courses to upskill myself in
			different industry tools. My first internship was working remotely
			as a Data Analyst at Dashlabs.AI, a local health software company. A
			few months later, I got another remote internship as a Frontend and
			Data intern at a start-up called WiV, a wine investment company. I
			took a Data Science Apprenticeship at Opswerks last February-May
			2024 to explore my career options. It was a fulfilling experience
			because it was my first on-site, hands-on professional work
			experience. The overall experience inspired me to hone my technical
			skills and made me realize I work best within a team setting.
		</p>
	);

	const content4 = (
		<p className="my-auto md:text-left">
			I took up my Master of Science degree in Computer Science. I chose
			to take this to further improve on working as an individual and
			expand on my undergraduate thesis on a national scale. For the first
			year of the MS degree, a lot of our undergraduate subjects were
			taught to us in depth. It gave me a better appreciation and helped
			me develop the patience and grit to understand and solve a problem
			better.
			<br></br>
			<br></br>
			It was here where I honed my research skills and learned how to work
			individually. I continued to develop my undergraduate thesis
			entitled (title) to accommodate all regions of the Philippines. I
			was so fortunate to be mentored by Doctor Maria Regina Justina
			Estuar during this time.
			<br></br>
			<br></br>I was fortunate to be given the opportunity to present my
			research on the international stage at a public health conference
			held in Bankok, Thailand last August 2024. I also volunteered to
			present my thesis at the 7th Graduate Research Festival held last
			April 26, 2025 via Zoom. I joined a group of other graudate students
			from different courses of the Loyola Schools to present and answer
			questions given by a panel.
		</p>
	);

	const content5 = (
		<p className="my-auto md:text-left">
			My first full time job is as a Junior Software Engineer at UBX. I've
			been interested in taking on a full-stack developer or data science
			roles. The most memorable part of my job was working on{" "}
			<a
				href="https://aboitizeyes.aboitiz.com/great_transformation/all-hands-on-deck-how-ubxs-swift-migration-provided-a-seamless-transition-for-the-perahub-app/
			"
				className="underline"
			>
				PeraHub
			</a>
			. It was my first time being exposed to developing native iOS mobile
			applications. I worked on a cross-functional team of quality
			assurance testers, buisiness analysts, and other developers. This
			was a very memorable experience because of the grit and patience I
			gained from debugging and developing different features of the
			application.
			<br></br>
			<br></br>I would dabble in learning how to apply AI into common
			software engineer workflows. I learned the Model Context Protocol
			(MCP) and developed a workflow where a telegram chatbot helps
			developers understand a Gitlab codebase. It uses Google Gemini API
			to generate a comprehensive explanation to any file. I also
			developed a simple CI/CD pipeline to generate documentation each
			time commits are pushed to a Gitlab repository.
			<br></br>
			<br></br>
			My personal goal is to use the knowledge, skills, and understanding
			learned in my field to help other people. I advocate for creating a
			positive social impact through my work and the skills I have to
			offer. I work well individually but perfer working collaboratively
			on a team. I empathize with others, value inclusive environments and
			adapt a growth mindset in any project or task I partake in.
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
			. I worked alongside different departments that led the
			organization. My main tasks were internal-based: to document what
			was happening in the org for the other departments. I was given the
			opportunity to lead a project that revived an old newsletter of the
			organization: Compress. The team was made of designers and writers
			and led by the Documentations and Creatives Department of the org.
			The aim was to showcase what the organization was all about, given
			the social-distancing aspect.
			<br></br>
			<br></br>I also branched out to other organizations such as the
			Guidon and Byte. I applied my knowledge on basic web development
			techniques and languages. It was here where I exposed myself to
			seeing how technology is impactful in disseminating information to
			the public and making it engaging for users from different
			backgrounds.
		</p>
	);

	const containerOneStyle =
		"md:flex md:flex-wrap flex-col items-center mx-5 my-5 p-5 bg-opacity-60 border-2 border-slate-900 rounded-xl";
	const containerTwoStyle =
		"md:flex md:flex-wrap flex-col items-center mx-5 my-5 p-5 bg-opacity-60 border-2 border-slate-900 rounded-xl";
	const containerThreeStyle =
		"md:flex md:flex-wrap flex-col items-center mx-5 my-5 p-5 bg-opacity-60 border-2 border-slate-900 rounded-xl";
	const container4Style =
		"md:flex md:flex-wrap flex-col items-center mx-5 my-5 p-5 bg-opacity-60 border-2 border-slate-900 rounded-xl";
	const containerFiveStyle =
		"md:flex md:flex-wrap flex-col items-center mx-5 my-5 p-5 bg-opacity-60 border-2 border-slate-900 rounded-xl";
	const containerSixStyle =
		"md:flex md:flex-wrap flex-col items-center mx-5 my-5 p-5 bg-opacity-60 border-2 border-slate-900 rounded-xl";

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
				containerStyle={containerOneStyle}
			/>

			<FontAwesomeIcon
				icon={faTrain}
				size="3x"
				style={{ color: "black" }}
			/>

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
				containerStyle={containerTwoStyle}
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
				containerStyle={containerThreeStyle}
			/>

			<FontAwesomeIcon
				icon={faCoffee}
				size="3x"
				style={{ color: "black" }}
			/>

			<RectangleContainerToggle
				title="Side quests"
				content={content3}
				containerStyle={container4Style}
			/>

			<FontAwesomeIcon
				icon={faTrain}
				size="3x"
				style={{ color: "black" }}
			/>

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
				containerStyle={containerFiveStyle}
			/>

			<FontAwesomeIcon
				icon={faLocationDot}
				size="3x"
				style={{ color: "black" }}
			/>

			<RectangleContainerToggle
				title="First 9 to 5"
				images={
					<img
						src={ubx_ps}
						alt="UBX Photoshoot"
						className="h-1/3 w-1/3 mx-auto"
					/>
				}
				content={content5}
				containerStyle={containerSixStyle}
			/>
		</>
	);
};

export default EventText;
