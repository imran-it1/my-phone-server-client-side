import { useLoaderData } from "react-router-dom";

const Phone = () => {
	const phone = useLoaderData();
	console.log(phone);

	return (
		<div>
			<h1>Phone</h1>
			<img src={phone.image} alt="phone-image" />
			<p>Price:{phone.price}$</p>
		</div>
	);
};

export default Phone;
