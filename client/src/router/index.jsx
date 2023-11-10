import { createBrowserRouter } from "react-router-dom";
import Home from "../view/Home";
import Layout from "../components/Layout";
import Login from "../view/LoginPage";
import AddUser from "../view/CreateUser";
import DetailUser from "../view/DetailUser";
import EditUser from "../view/EditUser";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/detail/:id",
        element: <DetailUser />,
      },
      {
        path: "/edit/:id",
        element: <EditUser />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
