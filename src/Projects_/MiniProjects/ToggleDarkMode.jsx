import { useState } from "react";
import { React } from "react";
const ToggleDarkMode = () => {
	const [isChecked, setIsChecked] = useState(false);
	//     # colors = [
	// #     '#ADD3D3',  # Soft Blue (like the ocean)
	// #     '#CB8F40',  # Sandy Brown
	// #     '#F0F5F1',  # Off-White (like seafoam or light fabrics)
	// #     '#E3856B',  # Soft Coral/Peach (sunset hues)
	// #     '#A7C957',  # Light Green (coastal foliage)
	// #     '#F2AE72',  # Pale Orange (another sunset shade)
	// #     '#D4A373',  # Tan (beach sand)
	// #     '#9BC1BC',  # Seafoam Green
	// #     # '#F9E79F',  # Pale Yellow (sunshine)
	// #     # '#DBBADD'   # Lilac/Lavender (soft summer flowers)
	// # ]

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};
	return (
		<>
			<div className="w-2/3 h-2/3 lg:w-1/3 lg:h-1/3 py-10 mx-auto drop-shadow-lg bg-[#F0F5F1] p-10">
				<div className="mx-auto my-auto">
					{isChecked ? (
						<div
							className="relative mx-auto my-auto 
										bg-[#ADD3D3] rounded-full p-1 
										flex justify-start 
										transition-discrete delay-300 duration-700 ease-in-out"
						>
							<div
								className="my-auto 
                                            bg-[#F9E79F] 
                                            rounded-full 
                                            h-36
                                            w-36
                                            drop-shadow-xl cursor-pointer"
								onClick={handleCheckboxChange} // Make the whole div clickable
							>
								<input
									type="checkbox"
									value={isChecked}
									onChange={handleCheckboxChange}
									className="opacity-0 absolute" // Hide checkbox
								/>
								{/* Optional: you can put custom visual elements inside the div here */}
							</div>
						</div>
					) : (
						<div
							className="relative mx-auto my-auto 
										bg-blue-950 rounded-full p-1 
										flex justify-end 
										transition-discrete delay-300 duration-700 ease-in-out"
						>
							<div
								onClick={handleCheckboxChange}
								className="bg-[#F0F5F1] 
                                            rounded-full 
                                            h-36
                                            w-36
                                            drop-shadow-xl 
                                            cursor-pointer"
							>
								<input
									type="checkbox"
									value={isChecked}
									onChange={handleCheckboxChange}
									className="opacity-0 absolute"
								/>
								<div className="w-1 h-1 bg-[#F0F5F1] absolute top-10 left-40 rounded-full"></div>
								<div
									className="absolute top-4 left-0 right-0 mx-auto w-0 h-0 
									border-l-[10px] border-l-transparent 
									border-r-[10px] border-r-transparent 
									border-b-[10px] border-b-[#F0F5F1]-400"
								></div>
								<div
									className="absolute top-5 left-0 right-0 mx-auto w-0 h-0 
									border-l-[10px] border-l-transparent 
									border-r-[10px] border-r-transparent 
									border-t-[10px] border-t-[#F0F5F1]-400"
								></div>
								<div className="w-1 h-1 bg-[#F0F5F1] absolute top-20 left-10 rounded-full"></div>
								<div
									className="absolute bottom-10 left-14 mx-auto w-0 h-0 
									border-l-[10px] border-l-transparent 
									border-r-[10px] border-r-transparent 
									border-b-[10px] border-b-[#F0F5F1]-400"
								></div>
								<div
									className="absolute bottom-9 left-14 mx-auto w-0 h-0 
									border-l-[10px] border-l-transparent 
									border-r-[10px] border-r-transparent 
									border-t-[10px] border-t-[#F0F5F1]-400"
								></div>
								<div className="w-1 h-1 bg-[#F0F5F1] absolute bottom-9 right-30 rounded-full"></div>
								<div className="w-1 h-1 bg-[#F0F5F1] absolute top-9 left-30 rounded-full"></div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ToggleDarkMode;
