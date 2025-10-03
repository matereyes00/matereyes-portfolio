import { useEffect, useState } from "react";

export const useLoadingDelay = ({ loading, delay }) => {
	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		if (!loading) {
			const timer = setTimeout(() => {
				setShowLoader(false);
			}, 2000); // adjust delay here
			return () => clearTimeout(timer);
		}
	}, [loading, delay]);

	return showLoader;
};
