import React from "react";
import HomePage from "../../pages/HomePage.jsx";
import MyAccountPage from "../../pages/MyAccountPage.jsx";
import SignIn from "../../auth/SignIn.jsx";
import Register from "../../auth/Register.jsx";
import ProductDetailsPage from "../../pages/ProductDetailsPage.jsx";
import Cart from "../../card/Cart.jsx";
import { Route, Routes } from "react-router-dom";

const Main = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/my-account" element={<MyAccountPage />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/register" element={<Register />} />
				<Route path="/product-details/:productId" element={<ProductDetailsPage />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	);
};

export default Main;
