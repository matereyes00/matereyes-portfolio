import ProjectCard from "../Features/Projects/ProjectCard";
import { iconMap } from "../utils/iconMap";
import { useFirestoreCollection } from "../hooks/useFirestoreCollectionHook";
import { useLoadingDelay } from "../hooks/useLoadingDelay";
import { loadingIcon } from "../Components/common/Loading";

const MiniProjects = () => {
	const { data: miniProjectsData, loading } =
		useFirestoreCollection("miniProjects");
	const showLoader = useLoadingDelay(loading, 2000); // 2s delay

	const titleDict = miniProjectsData.map((project) => ({
		...project, // Copy title, tags, description, link, etc.
		stack: project.stack.map((techName) => iconMap[techName] || techName), // Convert stack names to components
	}));

	const miniProjects = titleDict.map((item, idx) => (
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
			<h1 className="text-4xl m-4">Mini projects</h1>
			<div className="grid grid-cols-3 gap-4 m-24">
				{showLoader ? loadingIcon : miniProjects}
			</div>
		</>
	);
};

export default MiniProjects;
