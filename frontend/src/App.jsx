import { createTheme, CssBaseline, ThemeProvider } from "@mui/material/";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";
import Posts from "./pages/Posts";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const theme = createTheme({
    palette: {
        primary: {
            main: "#317773",
        },
        secondary: {
            main: "#E2D1F9",
        },
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
});

export function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("access_token") !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/post",
            element: <Posts />,
        },
        {
            path: "/post/:postId",
            element: <PostDetail />,
        },
        {
            path: "/product",
            element: <Products />,
        },
        {
            path: "/product/:productId",
            element: <ProductDetail />,
        },
        {
            path: "/signin",
            element: <SignIn isAuth={isAuth} setIsAuth={setIsAuth} />,
        },
        {
            path: "/signup",
            element: <SignUp isAuth={isAuth} setIsAuth={setIsAuth} />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);

    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
                <CssBaseline />
                <Nav />
                <RouterProvider router={router}></RouterProvider>
                <Footer
                    title='Refresh your day with our premium teas'
                    description='Experience the finest selection of premium teas from around the world. Our carefully curated collection will delight your senses and invigorate your day. Try our teas today and discover a world of flavor and relaxation.'
                />
                {/* <h1 className='text-3xl font-bold underline'>Hello world!</h1> */}
            </div>
        </ThemeProvider>
    );
}
