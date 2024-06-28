import httpClient from "@api/httpClient";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpClient({
		method: "get",
		url: ENDPOINT.FOOTER,
	});

	return {
		ready,
		data,
		error,
	};
};

const footerModel = {
	list: handleList,
};

export default footerModel;
