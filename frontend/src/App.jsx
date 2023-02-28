import axios from "axios";
import { useState } from "react";
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
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);
    const [products, setProducts] = useState([]);

    axios
        .all([
            axios.get("http://127.0.0.1:8000/api/posts/"),
            axios.get("http://127.0.0.1:8000/api/products/"),
        ])
        .then((response) => {
            setPosts(response[0].data);
            setProducts(response[1].data);
        });

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
    );
}

export default App;
