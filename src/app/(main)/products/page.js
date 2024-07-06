// -- modules
import Products from "@modules/Products";

// -- models
import productModel from "@models/product";

const metadata = {
	title: "Products | Crappo",
	description: "Lorem ipsum dolor sit amet.",
	keyword: "Lorem ipsum dolor sit amet.",
};

// =====================
// ProductsPage
// =====================
const ProductsPage = async () => {
	const products = await productModel.list();

	const props = {
		ssrData: { products },
	};

	return <Products {...props} />;
};

export { metadata };
export default ProductsPage;
