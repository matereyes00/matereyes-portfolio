import ProjectCard from "../Features/Projects/ProjectCard";
import { iconMap } from "../utils/iconMap";
import {useFirestoreCollection} from '../hooks/useFirestoreCollectionHook'
import loadingGif from "../Assets/loading.gif";

const MiniProjects = () => {
	const { data: miniProjectsData, loading } = useFirestoreCollection('miniProjects');
	
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

	if (loading) { 
		return ( 
			 <div className="flex items-center justify-center min-h-screen">
				<div className="flex flex-col items-center">
					<img
					src={loadingGif}
					alt="Loading..."
					className="w-40 h-40"
					/>
				</div>
			</div>
		); 
	}

	return (
		<>
			<h1 className="text-4xl m-4">Mini projects</h1>
			<div className="grid grid-cols-3 gap-4 m-24">{miniProjects}</div>
		</>
	);
};

export default MiniProjects;
