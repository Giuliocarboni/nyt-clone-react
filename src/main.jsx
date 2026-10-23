import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import ArticlesProvider from "./Context/ArticlesProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ArticlesProvider>
        <App />
      </ArticlesProvider>
    </BrowserRouter>
  </StrictMode>,
);
