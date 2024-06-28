import httpClient from "@api/httpClient";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpClient({
		method: "get",
		url: ENDPOINT.HEADER,
	});

	return {
		ready,
		data,
		error,
	};
};

const headerModel = {
	list: handleList,
};

export default headerModel;
