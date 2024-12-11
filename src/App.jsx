import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';

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
  InsurerPage,
} from './pages';

import { action as loginAction } from './pages/Login';
import { action as registerAction } from './pages/Register';
import { insurance } from './insurance';

import { ErrorElement } from './error';
import Dashboard from './components/DashBoards/User/DashBoard';
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
        path: 'dashboard',
        element: <Dashboard />,
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
      {
        path: 'companies/insurerPage/:id',
        element: <InsurerPage />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(insurance),
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction(insurance),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
