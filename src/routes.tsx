import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import FrontPage from "./pages/FrontPage";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import InfoPage from "./pages/InfoPage";
import LogsPage from "./pages/LogsPage";
import WorkPage from "./pages/WorkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FrontPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "story",
        element: <StoryPage />,
      },
      {
        path: "info",
        element: <InfoPage />,
      },
      {
        path: "logs",
        element: <LogsPage />,
      },
      {
        path: "work",
        element: <WorkPage />,
      },
    ],
  },
]);

export default router;
