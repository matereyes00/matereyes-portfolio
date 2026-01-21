import Publication from "../Features/Home/Publication";
import WhoAmI from "../Features/Home/WhoAmI";
import who_am_i_img from "../Assets/mate.jpg";
import { useFirestoreCollection } from "../hooks/useFirestoreCollectionHook";
import { useLoadingDelay } from "../hooks/useLoadingDelay";
import { loadingIcon } from "../Components/common/Loading";

function Home() {
	const who_am_i_headline = "Martina Therese R. Reyes, M.S.";
	const tab1_text = "Junior Software Engineer at UBX";
	const { data: publicationData, loading } = useFirestoreCollection("about");
	const showLoader = useLoadingDelay(loading, 2000); // 2s delay

	// const embeds = [
	// 	<></>,
	// 	<></>,
	// 	<>
	// 		<iframe
	// 			src="https://drive.google.com/file/d/10-Qm1QeDph4nSiPx-jGJ_S06IftOo0Va/preview"
	// 			class="w-full aspect-video"
	// 			allow="autoplay"
	// 			className="m-auto"
	// 			title="ICOPH: presentation"
	// 		></iframe>
	// 	</>,
	// ];

	const publications = publicationData.map((pub, index) => (
		<Publication
			class="home-pub"
			key={index}
			PubTitle={pub.title}
			PubId={`publication-${index}`}
			PubDate={pub.date}
			PubAuthors={pub.authors}
			PubDescription={pub.description}
			articleUrl={pub.url}
			embed={pub.embed}
		/>
	));

	return (
		<>
			<div
				id="home-terminal"
				className="text-purple-950 w-4/5 my-8 mx-auto rounded-md"
			>
				<div
					id="home-terminal-content"
					className="flex flex-col w-full"
				>
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
			<div id="publications" className="md:grid md:grid-row grid-cols-3">
				{showLoader ? loadingIcon : publications}
			</div>
		</>
	);
}

export default Home;
