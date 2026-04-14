import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Tooltip from "./tooltip/Tooltip.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Tooltip text="i am here">
      <p className="pt-3 mt-9 text-center text-[24px] border bg-yellow-500 text-white w-[150px] rounded-3xl p-2.5">above set</p>
    </Tooltip>
  </StrictMode>
);
