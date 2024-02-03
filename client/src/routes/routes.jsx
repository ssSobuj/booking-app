import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import Profile from "../pages/profile/Profile";
import PrivetRout from "./privetRout";
import PublickRout from "./PublickRout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: (
          <PublickRout>
            {" "}
            <Register />
          </PublickRout>
        ),
      },
      {
        path: "singin",
        element: (
          <PublickRout>
            <SignIn />
          </PublickRout>
        ),
      },
      {
        path: "profile/:id",
        element: (
          <PrivetRout>
            <Profile />
          </PrivetRout>
        ),
      },
    ],
  },
]);
