import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/app.page.tsx";

import "normalize.css/normalize.css";
import "./styles/index.scss";

const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
