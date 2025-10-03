import ProjectCard from "../Features/Projects/ProjectCard";
import loadingGif from "../Assets/loading.gif";
import { useFirestoreCollection } from "../hooks/useFirestoreCollectionHook";
import { iconMap } from "../utils/iconMap";
import { useLoadingDelay } from "../hooks/useLoadingDelay";
import { loadingIcon } from "../Components/common/Loading";

const Projects = () => {
	const { data: projectsData, loading } = useFirestoreCollection("projects");
	const showLoader = useLoadingDelay(loading, 2000); // 2s delay

	// 3. Transform the imported JSON data into the format needed by your component
	const titleDict = projectsData.map((project) => ({
		...project, // Copy title, tags, description, link, etc.
		stack: project.stack.map((techName) => iconMap[techName] || techName), // Convert stack names to components
	}));

	const projects = titleDict.map((item, idx) => (
		<ProjectCard
			key={idx}
			projectDescription={item.description}
			projectTitle={item.title}
			projectLink={item.link}
			projectStack={item.stack}
			deployedProjectLink={item.deployedProject}
		/>
	));

	return (
		<>
			<h1 className="font-bold text-4xl">Academic Projects</h1>
			<div className="w-4/5 mx-auto grid lg:grid-flow-col lg:grid-rows-4 gap-4">
				{showLoader ? loadingIcon : projects}
			</div>
		</>
	);
};

export default Projects;
