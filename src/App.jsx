import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  Cart,
  Error,
  HomeLayout,
  Order,
  Products,
  Landing,
  SingleProduct,
  Login,
  Register,
  Checkout,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as productLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { ErrorElement } from "./components";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";

import {store} from './store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: productLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
