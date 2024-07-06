// -- models
import heroBannerModel from "@models/heroBanner";
import numbersModel from "@models/numbers";
import whyCrappoModel from "@models/whyCrappo";

// -- modules
import Home from "presentation/modules/Home";

const metadata = {
	title: "Home | Crappo",
	description: "Lorem ipsum dolor sit amet.",
	keyword: "Lorem ipsum dolor sit amet.",
};

// =====================
// HomePage
// =====================
const HomePage = async () => {
	const heroBanner = await heroBannerModel.list();
	const numbers = await numbersModel.list();
	const whyCrappo = await whyCrappoModel.list();

	const data = {
		ssrData: { heroBanner, numbers, whyCrappo },
	};

	return (
		<>
			<Home {...data} />
		</>
	);
};

export { metadata };
export default HomePage;
