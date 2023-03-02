import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import AppBarCustom from "../layout/AppBarCustom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PostDetail from "../pages/PostDetail";
import Posts from "../pages/Posts";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import {CssBaseline} from "@mui/material";
import "./App.css"
import {createTheme, ThemeProvider} from "@mui/material/";

const theme = createTheme({
    palette: {
        primary: {
            main: '#317773',
        },
        secondary: {
            main: '#E2D1F9',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("access_token") !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);

    const [posts, setPosts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .all([
                axios.get("http://127.0.0.1:8000/api/posts/"),
                axios.get("http://127.0.0.1:8000/api/products/"),
            ])
            .then((response) => {
                setPosts(response[0].data);
                setProducts(response[1].data);
            });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
                <CssBaseline />
                <Router>
                    <AppBarCustom isAuth={isAuth} />
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                            errorElement={<NotFound />}
                        />
                        <Route
                            path='/posts'
                            element={<Posts posts={posts} />}
                            errorElement={<NotFound />}
                        />
                        <Route
                            path='/products'
                            element={<Products products={products} />}
                            errorElement={<NotFound />}
                        />
                        <Route
                            path='/signup'
                            element={<SignUp />}
                            errorElement={<NotFound />}
                        />
                        <Route
                            path='/signin'
                            element={<SignIn />}
                            errorElement={<NotFound />}
                        />
                        <Route
                            path='/posts/:postId'
                            element={<PostDetail />}
                            errorElement={<NotFound />}
                        />
                        <Route
                            path='/products/:productId'
                            element={<ProductDetail />}
                            errorElement={<NotFound />}
                        />
                    </Routes>
                    <Footer
                        title='Refresh your day with our premium teas'
                        description='Experience the finest selection of premium teas from around the world. Our carefully curated collection will delight your senses and invigorate your day. Try our teas today and discover a world of flavor and relaxation.'
                    />
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
