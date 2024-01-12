import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import AuthProbider from "./context/AuthProbider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProbider>
      <RouterProvider router={routes} />
    </AuthProbider>
  </React.StrictMode>
);
