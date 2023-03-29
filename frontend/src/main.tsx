import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ContextRootStore, store } from "./MST/Stores/RootStore.js";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import PostDetail from "./pages/PostDetail.js";
import Posts from "./pages/Posts.js";
import ProductDetail from "./pages/ProductDetail.js";
import Products from "./pages/Products.js";
import { Root } from "./pages/Root.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";

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
