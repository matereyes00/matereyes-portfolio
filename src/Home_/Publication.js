import React from "react";
// import './Home.css';

const Publication = ({
	PubTitle,
	PubId,
	PubDescription,
	articleUrl,
	PubDate,
	PubAuthors,
	embed,
}) => {
	return (
		<div
			id="publications-container-id"
			className="w-96 my-8 bg-indigo-100 p-2 mx-auto rounded-lg">
			<h1 className="font-semibold mx-8">
				<a href={articleUrl} target="_blank" rel="noreferrer">
					{PubTitle}
				</a>
			</h1>
			<h4 className="text-sm italic mx-16">
				{PubDate} | {PubAuthors}
			</h4>
			<p className="text-sm mx-8 my-3">{PubDescription}</p>
			{embed}
		</div>
	);
};

export default Publication;
