import httpClient from "@api/httpClient";
import ENDPOINT from "@api/endPoint";

const handleData = () => {
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
	data: handleData,
};

export default headerModel;
