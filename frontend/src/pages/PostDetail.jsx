import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/posts/${postId}`)
            .then((res) => setPost(res.data));
    }, []);

    return (
        <>
            {!post ? (
                <div>
                    <h1>Post is not here</h1>
                </div>
            ) : (
                <div className='h-screen'>
                    <div className='mt-7 flex justify-center'>
                        <h1 className='text-4xl font-bold'>{post.title}</h1>
                    </div>
                    <div className='mt-7 ml-10 mr-10'>
                        <p>{post.body}</p>
                    </div>
                    <div className='ml-10 mt-7 text-2xl font-bold'>Tags</div>
                    <ul className='flex flex-wrap gap-2 mt-3 ml-7'>
                        {!post.tags ? (
                            <div>
                                <h3>No tags</h3>
                            </div>
                        ) : (
                            post.tags.map((tag) => (
                                <li className='px-3 py-1 bg-gray-100 text-xl rounded-full'>
                                    {tag}
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </>
    );
};

export default PostDetail;
