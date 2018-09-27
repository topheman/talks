import React from "react";
import { unstable_createRoot } from "react-dom";

import App from "./App";

const render = () => {
  unstable_createRoot(
    document.getElementById("root")
  ).render(<App />);
};
render();