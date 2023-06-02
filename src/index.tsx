import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement === null) {
  throw new Error("Root element not found");
} else {
  const root = createRoot(rootElement);
  const element = React.createElement('h1', {
    className: 'title',
  },
    'Online Supermarket'
  )
  root.render(
    element
  );
}
