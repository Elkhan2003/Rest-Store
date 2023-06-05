import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useThemeHook } from "../provider/ThemeProvider.jsx";
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import "./Style.scss";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
	const { productId } = useParams();
	const [productData, setProductData] = useState([]);
	const [theme] = useThemeHook();
	const { addItem } = useCart();

	useEffect(() => {
		const getResponse = async () => {
			const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
				.then(res => res.json());
			setProductData(res);
		};

		getResponse();
	}, [productId]);

	return (
		<Container className="py-5">
			<Row className="justify-content-center mt-5">
				<Col xs={10} md={7} lg={5} className="p-0">
					<Lightbox
						images={[
							{
								src: productData.image,
								title: productData.title,
								description: "img 1"
							},
							{
								src: productData.image,
								title: productData.title,
								description: "img 2"
							},
							{
								src: productData.image,
								title: productData.title,
								description: "img 3"
							},
							{
								src: productData.image,
								title: productData.title,
								description: "img 4"
							}
						]}
					/>
				</Col>
				<Col xs={10} md={7} lg={7} className={`${theme ? "text-light" : "text-black"} product-details`}>
					<h1>{productData.title}</h1>
					<Button
						onClick={() => addItem(productData)}
						className={theme ? "bg-dark-primary text-black" : "bg-light-primary"}
						style={{ borderRadius: "0", border: 0 }}
					>
						<BsCartPlus size="1.8rem" />
						Add to cart
					</Button>
					<br />
					<b className={`${theme ? "text-dark-primary" : "text-light-primary"} h4 mt-3 d-block`}>
						Rs. {productData.price}
					</b>
					<br />
					<b className="h5">4.1 ⭐</b>
					<p className="mt-3 h5" style={{ opacity: "0.8", fontWeight: "400" }}>
						{productData.description}
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductDetailsPage;
