import React from 'react';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import github from "../images/github.svg";
import StackItem from '../Stack_/StackItem';


const ProjectCard = ({ projectTitle, projectDescription, projectLink, projectStack }) => {
    return (
        <>
            <div className='border-2 border-slate-900 rounded-xl p-1'>
                <div className='flex flex-row justify-center mt-3 border-b-2 border-slate-900 
                w-2/3 mx-auto'>
                    <h1 className='text-3xl'>{projectTitle}</h1>
                    <FontAwesomeIcon icon={faExternalLink} size="xs" style={{ color: 'black' }} className='ml-2' />
                    
                </div>
                <div className="flex flex-row justify-center mx-auto w-2/3">
                    {projectStack.map( (stackItem, index) => (
                        <div className="w-1/5">
                            <p key={index}>
                                <StackItem image={stackItem}/>
                            </p>
                        </div>
                    ))}
                </div>
                <p>{projectDescription}</p>
                <a href={projectLink} target="_blank"><img src={github} alt="github-icon" className='w-14 h-14 mx-auto' /></a>
            </div>
        </>
    );
};

export default ProjectCard;