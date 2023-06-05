import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/provider/ThemeProvider.jsx";
import { CartProvider } from "react-use-cart";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
