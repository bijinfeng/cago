import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from "@pingtou/web";

export const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
