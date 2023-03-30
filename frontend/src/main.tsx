import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ContextRootStore, store } from "./mst/Stores/RootStore.js";
import Home from "./pages/Home/Home";
import NotFound from "./pages/404/NotFound";
import PostDetail from "./pages/Posts/PostDetail";
import Posts from "./pages/Posts/Posts";
import ProductDetail from "./pages/Products/ProductDetail";
import Products from "./pages/Products/Products";
import { Root } from "./Root";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import SignOut from "./pages/Auth/SignOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/post/:postId",
        element: <PostDetail />,
      },

      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signout",
    element: <SignOut />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextRootStore.Provider value={store}>
      <RouterProvider router={router} />
    </ContextRootStore.Provider>
  </React.StrictMode>
);
