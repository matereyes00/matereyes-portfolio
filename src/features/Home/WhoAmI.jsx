import React from "react";
// import '../About_/Milestones_/Event.css';

import SocialMedia from "./Socials";
import github_img from "../../assets/github.svg";
import linkedin_img from "../../assets/linkedin.svg";
import orcid_img from "../../assets/orcid.svg";

const WhoAmI = ({ Name, container_id, imageUrl, Title }) => {
	const ItemName = ["Linkedin", "Github", "ORCID"];
	const socialLinks = [
		"https://www.linkedin.com/in/martina-therese-reyes-8b490a205/",
		"https://github.com/matereyes00",
		"https://orcid.org/0009-0005-6656-2780",
	];
	const socialsImgs = [linkedin_img, github_img, orcid_img];
	return (
		<div
			id={container_id}
			className="block md:flex md:flex-row text-sm md:text-xl"
		>
			<div className="m-auto p-5">
				<h1>{Name}</h1>
				<h4>{Title}</h4>
				<div className="hidden md:flex md:flex-row md:justify-around md:border-2">
					<SocialMedia
						itemName={ItemName[0]}
						Link={socialLinks[0]}
						Icon={socialsImgs[0]}
					/>
					<SocialMedia
						itemName={ItemName[1]}
						Link={socialLinks[1]}
						Icon={socialsImgs[1]}
					/>
					<SocialMedia
						itemName={ItemName[2]}
						Link={socialLinks[2]}
						Icon={socialsImgs[2]}
					/>
				</div>
			</div>

			<div className="w-3/4 mx-auto">
				<img src={imageUrl} alt={Name} className="" />
				<div className="flex flex-row justify-center w-full h-1/2 md:hidden">
					<SocialMedia
						itemName={ItemName[0]}
						Link={socialLinks[0]}
						Icon={socialsImgs[0]}
					/>
					<SocialMedia
						itemName={ItemName[1]}
						Link={socialLinks[1]}
						Icon={socialsImgs[1]}
					/>
					<SocialMedia
						itemName={ItemName[2]}
						Link={socialLinks[2]}
						Icon={socialsImgs[2]}
					/>
				</div>
			</div>
		</div>
	);
};

export default WhoAmI;
