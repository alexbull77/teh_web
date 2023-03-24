import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ContextRootStore, store } from "./MST/Stores/RootStore";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";
import Posts from "./pages/Posts";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import { Root } from "./pages/Root";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
        ],
    },

    {
        path: "/post/:postId",
        element: <PostDetail />,
    },

    {
        path: "/product/:productId",
        element: <ProductDetail />,
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
