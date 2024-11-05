import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/app.page.tsx";

import "normalize.css/normalize.css";
import "./styles/index.scss";

if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser");
  worker.start();
}

const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
