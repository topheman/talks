import React from "react";
import { render } from "react-dom";

import App from "./App";

const renderRoot = () => {
  render(<App />, document.getElementById("root"))
};
renderRoot();