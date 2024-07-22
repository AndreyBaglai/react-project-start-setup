import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '@pages/Home';
import Test from '@pages/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/test', element: <Test />, children: [] },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
