// -- modules
import ProductsDetail from "@modules/Products/Detail";

// -- models
import productModel from "@models/product";

const productDetailPage = async (propsPage) => {
	const {
		params: { id },
	} = propsPage;

	const productDetail = await productModel.detail(id);

	const props = {
		ssrData: { productDetail },
	};

	return <ProductsDetail {...props} />;
};

export default productDetailPage;
