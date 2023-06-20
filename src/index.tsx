import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"

const rootElement = document.getElementById("root");
const root = document.querySelector("#root");
if (rootElement === null) {
  throw new Error("Root element not found");
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
