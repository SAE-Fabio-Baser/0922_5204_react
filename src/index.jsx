import React from "react";
import { createRoot } from "react-dom/client";

import "semantic-ui-css/semantic.min.css"

import App from "./App";

const root = createRoot(document.querySelector("#app"));

root.render(<App />);
