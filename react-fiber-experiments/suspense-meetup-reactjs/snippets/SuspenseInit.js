import React from "react";
import { unstable_createRoot } from "react-dom";

import App from "./App";

const renderRoot = () => {
  unstable_createRoot(
    document.getElementById("root")
  ).render(<App />);
};
renderRoot();