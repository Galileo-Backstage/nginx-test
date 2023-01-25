import App from "../App";
import {
  createBrowserRouter,
} from "react-router-dom";
import Error from "../Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/error",
    element: <Error />,
  }
]);
