import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/app.page.tsx";

import "./index.scss";

const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
