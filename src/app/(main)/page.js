// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- modules
import Home from "presentation/modules/Home";

// -- SSR getHeroBannerData
const getHeroBannerData = async () => {
	const { data, error } = await httpRequest({
		method: "get",
		url: ENDPOINT.HERO_BANNER,
		transformResponse: [
			(data) => {
				const respo = JSON.parse(data);
				const transformData = respo.data.map((val) => ({
					img: val.image,
					title: val.title,
					sale: {
						title: val.label.badge,
						desc: val.label.description,
					},
					desc: val.description,
					btn: {
						to: val.button.to,
						text: val.button.text,
					},
				}));

				return {
					...respo,
					data: transformData,
				};
			},
		],
	});

	return {
		data,
		error,
	};
};

// -- SSR getNumbersData
const getNumbersData = async () => {
	const { data, error } = await httpRequest({
		method: "get",
		url: ENDPOINT.NUMBERS,
	});

	return {
		data,
		error,
	};
};

// =====================
// HomePage
// =====================
const HomePage = async () => {
	const heroBanner = await getHeroBannerData();
	const numbers = await getNumbersData();

	const data = {
		ssrData: { heroBanner, numbers },
	};

	return (
		<>
			<Home {...data} />
		</>
	);
};

export default HomePage;
