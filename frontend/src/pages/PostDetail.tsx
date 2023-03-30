import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { useRootStore } from "../MST/Stores/RootStore.tsx";

export const PostDetail = observer(() => {
  const { postId } = useParams();
  const { selectedPost, selectPostById, resetSelectedPost } = useRootStore();

  if (postId === undefined) {return null}

  useEffect(() => {
    selectPostById(postId)
    return (() => {
      resetSelectedPost()
    })
  }, []);

  return (
    <>
      {selectedPost === undefined ? (
        <div>
          <h1>Post is not here</h1>
        </div>
      ) : (
        <div className="h-screen">
          <div className="mt-7 flex justify-center">
            <h1 className="text-4xl font-bold">{selectedPost.title}</h1>
          </div>
          <div className="mt-7 ml-10 mr-10">
            <p>{selectedPost.body}</p>
          </div>
          <div className="ml-10 mt-7 text-2xl font-bold">Tags</div>
          <ul className="flex flex-wrap gap-2 mt-3 ml-7">
            {!selectedPost.tags ? (
              <div>
                <h3>No tags</h3>
              </div>
            ) : (
              selectedPost.tags.map((tag) => (
                <li className="px-3 py-1 bg-gray-100 text-xl rounded-full">
                  {tag}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
});

export default PostDetail;
