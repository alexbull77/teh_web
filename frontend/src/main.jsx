import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";
import Posts from "./pages/Posts";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         component: <App />,
//         children: [
//             {
//                 path: "/post",
//                 element: <Posts />,
//             },
//             {
//                 path: "/post/:postId",
//                 element: <PostDetail />,
//             },
//             {
//                 path: "/product",
//                 element: <Products />,
//             },
//             {
//                 path: "/product/:productId",
//                 element: <ProductDetail />,
//             },
//             {
//                 path: "/signin",
//                 element: <SignIn />,
//             },
//             {
//                 path: "/signup",
//                 element: <SignUp />,
//             },
//             {
//                 path: "*",
//                 element: <NotFound />,
//             },
//         ],
//     },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
