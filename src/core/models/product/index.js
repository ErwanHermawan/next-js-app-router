import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = async () => {
	return await httpRequest({
		method: "get",
		url: ENDPOINT.PRODUCTS,
	});
};

const handleDetail = async (id) => {
	return await httpRequest({
		method: "get",
		url: `${ENDPOINT.PRODUCTS}/${id}`,
	});
};

const productModel = {
	list: handleList,
	detail: handleDetail,
};

export default productModel;
