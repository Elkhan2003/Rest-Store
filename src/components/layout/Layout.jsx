import React from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header.jsx";
import Main from "./main/Main.jsx";
import Footer from "./footer/Footer.jsx";

const Layout = () => {
	return (
		<>
			<div className={scss.layout}>
				<header>
					<Header />
				</header>
				<main>
					<Main />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
};
export default Layout;