import ENDPOINT from "@api/endPoint";
import httpRequest from "@api/httpRequest";

import Products from "presentation/modules/Products";

const getServerSideProps = async () => {
	const { data: productData, error: productDataError } = await httpRequest({
		method: "get",
		url: `${ENDPOINT.PRODUCTS}`,
	});

	return {
		props: {
			product: productData,
		},
	};
};

const ProductPage = (props) => {
	return (
		<>
			<Products {...props} />
		</>
	);
};

export { getServerSideProps };
export default ProductPage;
