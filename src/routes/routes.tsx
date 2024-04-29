import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import ManageEventItem from "@/pages/admin/ManageEventItem";
import ManageRecentEvents from "@/pages/admin/ManageRecentEvents";
import ManageServices from "@/pages/admin/ManageServices";
import AddRecentEvent from "@/pages/admin/recentEvents/AddRecentEvent";
import UpdateRecentEvent from "@/pages/admin/recentEvents/UpdateRecentEvent";
import Home from "@/pages/home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/manage-recentEvents" />,
      },
      {
        path: "manage-recentEvents",
        element: <ManageRecentEvents />,
      },
      {
        path: "manage-recentEvents/add-event",
        element: <AddRecentEvent />,
      },
      {
        path: "manage-recentEvents/updateEvent/:id",
        element: <UpdateRecentEvent />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recent-event/${params.id}`),
      },
      {
        path: "manage-eventItems",
        element: <ManageEventItem />,
      },
      {
        path: "manage-services",
        element: <ManageServices />,
      },
    ],
  },
]);

export default router;
