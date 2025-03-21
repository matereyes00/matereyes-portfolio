import React, { useState } from "react";
import Publication from "./Publication";
import WhoAmI from "./WhoAmI";
import TabBar from "../Components/TabBar";
import who_am_i_img from "../images/mate.jpg";

function Home() {
	const who_am_i_headline = "Martina Therese R. Reyes, M.S.";
	const tab1_text =
		"Junior Software Engineer at UBX and current Master of Science in Computer Science student at Ateneo de Manila University";

	const pub_titles = [
		"Using K-means clustering: performing site selection to identify build-able areas for health centers (RHUs)",
		"Rust Programming: A Safe, Fast, and Versatile Choice",
		"Back Propagation and Recurrent Neural Networks for Optimal Location of Rural Health Unit Facilities in the Philippines",
	];
	const pub_date = ["December 2, 2023", "December 2, 2023", "August 16, 2024"];
	const pub_authors = [
		"Martina Therese R. Reyes",
		"Martina Therese R. Reyes",
		"Martina Therese R. Reyes, Dr. Ma. Regina Justina E. Estuar, Ph. D., Jann Railey E. Montalan, M.S.",
	];
	const pub_article_urls = [
		"https://medium.com/@martina.therese.reyes/using-k-means-clustering-performing-site-selection-to-identify-build-able-areas-for-health-centers-a089ef18f86f",
		"https://medium.com/@martina.therese.reyes/rust-programming-a-safe-fast-and-versatile-choice-71428b87c972",
		"https://drive.google.com/file/d/10-Qm1QeDph4nSiPx-jGJ_S06IftOo0Va/view?usp=sharing",
	];
	const pub_descriptions = [
		//first
		"This article was the final output of our Advanced Algorithms and Data Structures class for our M.S. Computer Science course (CSCI 201). The task was to research on how one algorithm or data structure works and how it's applied onto real world problems. My article deals with the k-means clustering algorithm and how it can be used to help improve healthcare facility infrastructure. I break the algorithm down step-by-step then demonstrate how it is applied to identify potential areas for health facility construction.",
		//second
		"This article was the final output of our Programming Languages and Paradigms class for my M.S. Computer Science course (CSCI 202). The task was to choose one programming language and research about it. I chose the Rust programming language because I personally never used it in the academic nor professional setting. The article contains a compact yet detailed discussion of Rust, its unique features,advantages, disadvantages, and usecases in the industry.",
		//third
		"The 10th International Conference on Public Health - ICOPH 2024 was held in Bangkok, Thailand on the 15-16th of August 2024. This conference gave me the platform to share my research by presenting in a public forum. I showcased my work on optimizing health facility locations in the Philippines using neural networks. Though it was mainly a proof of concept, it can adapt and be flexible depending on the location it will be applied on. I was very proud to answer during the Q&A portion because the audience and panel seemed interested in the study. Overall, it was an engaging experience because I was able to listen to other students, health experts and/or policy makers and doctors (to name a few!) present their work on how they solve public health issues in their country.",
	];
	const embeds = [
		<></>,
		<></>,
		<>
			<iframe
				src="https://drive.google.com/file/d/10-Qm1QeDph4nSiPx-jGJ_S06IftOo0Va/preview"
				class="w-full aspect-video"
				allow="autoplay"
				className="m-auto"
				title="ICOPH: presentation"></iframe>
		</>,
	];

	const publications = pub_titles.map((title, index) => (
        <Publication
            class="home-pub"
            key={index}
            PubTitle={title}
            PubId={`publication-${index}`}
            PubDate={pub_date[index]}
            PubAuthors={pub_authors[index]}
            PubDescription={pub_descriptions[index]}
            articleUrl={pub_article_urls[index]}
            embed={embeds[index]}
        />))

	return (
		<>
			<div
				id="home-terminal"
				className="text-purple-950 w-4/5 my-8 mx-auto rounded-md">
				{/* <TabBar tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} /> */}
				<div id="home-terminal-content" className="flex flex-col w-full">
					{/* {tabs[activeTab].content} */}
					<WhoAmI
						Name={who_am_i_headline}
						Title={tab1_text}
						imageUrl={who_am_i_img}
					/>
				</div>
			</div>
			<div className="w-full text-slate-900 h-24">
				<h1 className="font-bold my-auto text-4xl">
					Publications and Presentations
				</h1>
			</div>
			<div id="publications" className="md:grid md:grid-row grid-cols-2 gap:4">
				{publications}
			</div>
		</>
	);
}

export default Home;
