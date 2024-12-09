import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  About,
  Companies,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
  Services,
} from './pages';

import { ErrorElement } from './error';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'services',
        element: <Services />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'companies',
        element: <Companies />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
