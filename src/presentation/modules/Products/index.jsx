// --core
import { useState } from "react";
import Link from "next/link";

// -- templates
import Default from "@templates/Default";

// -- states
import useStateHeader from "@states/header";

const Products = (props) => {
	const { product } = props;
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("products");
	}, []);

	return (
		<>
			<Default>
				<div className="product">
					<div className="container">
						<div className="product__list">
							{product !== null &&
								product.map((val, idx) => (
									<div className="product__item" key={idx}>
										<div className="product__box">
											<Link
												href={`/products/${val.id}`}
												className="product__link"
											>
												{val.title}
											</Link>
											<div className="product__img">
												<img src={val.image} alt={val.title} />
											</div>
											<div className="product__txt">
												<h6 className="product__title">{val.title}</h6>
												<p className="product__price">${val.price}</p>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
				;
			</Default>
		</>
	);
};

export default Products;
