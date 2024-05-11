import { ErrorPage, ProtectedLayout, Dashboard } from "@pingtou/web";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedLayout />,
    loader: ProtectedLayout.loader,
    children: [
      {
        index: true,
        element: <Dashboard />,
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
