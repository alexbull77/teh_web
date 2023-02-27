import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBarCustom from "../layout/AppBarCustom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PostDetail from "../pages/PostDetail";
import Posts from "../pages/Posts";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/posts/")
            .then((res) => res.data)
            .then((res) => setPosts(res))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/products/")
            .then((res) => res.data)
            .then((res) => setProducts(res))
            .catch((err) => console.log(err));
    }, []);

    console.log(">>App.jsx -- Posts --", posts);
    console.log(">>App.jsx -- Products --", products);

    return (
        <div className='App'>
            <Router>
                <AppBarCustom />
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
                        element={<PostDetail posts={posts} />}
                        errorElement={<NotFound />}
                    />
                    <Route
                        path='/products/:productId'
                        element={<ProductDetail products={products} />}
                        errorElement={<NotFound />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
