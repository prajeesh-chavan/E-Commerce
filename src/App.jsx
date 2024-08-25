import { useState, createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "product-details",
          element: <ProductDetails />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
