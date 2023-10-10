import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<h3>Phone Info.</h3>
			<Link to={"/phones"}>Phones</Link>
		</div>
	);
};

export default Navbar;
