const socials = ({ itemName, Link, Icon }) => {
	return (
		<>
			<div className="mt-5 md:mt-12 ">
				<a href={Link} target="_blank">
					<img
						src={Icon}
						alt={itemName}
						className="w-3/4 h-3/4 my-auto mx-auto md:w-1/2 md:h-1/2"
					/>
				</a>
			</div>
		</>
	);
};

export default socials;
