import ProjectCard from "../Features/Projects/ProjectCard";
import loadingGif from "../Assets/loading.gif";
import { useFirestoreCollection } from '../hooks/useFirestoreCollectionHook'
import { iconMap } from "../utils/iconMap";

const Projects = () => {
	const { data: projectsData, loading } = useFirestoreCollection('projects');
	
	
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
			<h1 className="font-bold text-4xl">Academic Projects</h1>
			<div className="w-4/5 mx-auto grid lg:grid-flow-col lg:grid-rows-4 gap-4">
				{projects}
			</div>
		</>
	);
};

export default Projects;
