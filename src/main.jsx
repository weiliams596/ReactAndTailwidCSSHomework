import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import MyRouteres from "./allHomeWorks/MyRouteres";
import MainTest from "./Test/MainTest.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App>
      <MyRouteres />
    </App>
    {/* <MainTest /> */}
  </StrictMode>
);
