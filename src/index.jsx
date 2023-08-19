import "./style.css";
import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OnePage from "./OnePage";

const router = createBrowserRouter([{ path: "*", element: <OnePage /> }]);

router.subscribe((state) => console.log("new state", state));

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
