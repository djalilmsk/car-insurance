import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  About,
  Companies,
  Error,
  HelpPage,
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
        errorElement: <ErrorElement />,
      },
      {
        path: 'companies',
        element: <Companies />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'helpPage',
        element: <HelpPage />,
        errorElement: <ErrorElement />,
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
