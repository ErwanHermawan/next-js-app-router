// -- api
import httpClient from "@api/httpClient";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpClient({
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
		ready,
		data,
		error,
	};
};

const heroBannerModel = {
	list: handleList,
};

export default heroBannerModel;
