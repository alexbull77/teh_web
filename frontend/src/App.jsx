import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBarCustom from "../layout/AppBarCustom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import "./App.css";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Main posts={posts} />,
//     },
//     {
//         path: "products",
//         element:
//     }
// ])

function App() {
    const [posts, setPosts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/")
            .then((res) => res.json())
            .then((res) => setPosts(res));
    }, []);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products/")
            .then((res) => res.json())
            .then((res) => setProducts(res));
    }, []);

    return (
        <div className='App'>
            <Router>
                <AppBarCustom homepage_link='/' products_link='/products' />
                <Routes>
                    <Route
                        path='/'
                        element={<Main posts={posts} />}
                        errorElement={<NotFound />}
                    />
                    <Route
                        path='/products'
                        element={<Products products={products} />}
                        errorElement={<NotFound />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
