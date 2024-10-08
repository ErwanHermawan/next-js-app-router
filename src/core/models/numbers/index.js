import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = async () => {
	return await httpRequest({
		method: "get",
		url: ENDPOINT.NUMBERS,
	});
};

const numbersModel = {
	list: handleList,
};

export default numbersModel;
