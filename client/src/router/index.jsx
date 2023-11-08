import { createBrowserRouter } from "react-router-dom";
import Home from "../view/Home";
import Layout from "../components/Layout";
import Login from "../view/LoginPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
