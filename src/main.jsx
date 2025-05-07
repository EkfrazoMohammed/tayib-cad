import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ExamplesProvider } from "./context/ExamplesContext";
import router from "./router";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <ExamplesProvider>
      <RouterProvider router={router} />
    </ExamplesProvider>
  
);