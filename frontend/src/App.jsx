import { useEffect, useState } from "react";
import Main from "../pages/Main";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/")
            .then((res) => res.json())
            .then((res) => setPosts(res));
    }, []);

    return (
        <div className='App'>
            <Main posts={posts} />
        </div>
    );
}

export default App;
