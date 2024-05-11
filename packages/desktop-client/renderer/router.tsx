import { ErrorPage } from "@pingtou/web";
import { createHashRouter } from "react-router-dom";
import { Dashboard } from "renderer/views/dashboard"

export const router = createHashRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
