import React from "react";
import "./theme.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./components/provider/ThemeProvider.jsx";

import Layout from "./components/layout/Layout.jsx";

const App = () => {
	const [theme] = useThemeHook();

	return (
		<>
			<div
				className={theme ? "bg-black" : "bg-light-2"}
				style={{ height: "100vh", overflowY: "auto" }}>
				<Layout />
			</div>
		</>
	);
};
export default App;