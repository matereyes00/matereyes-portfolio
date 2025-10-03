import loadingGif from "../../Assets/loading.gif";

export const loadingIcon = (
	<>
		{/* <div className="flex items-center justify-center min-h-screen"> */}
		<div className="flex items-center justify-center col-span-3">
			<div className="flex flex-col items-center">
				<img src={loadingGif} alt="Loading..." className="w-40 h-40" />
			</div>
		</div>
	</>
);
