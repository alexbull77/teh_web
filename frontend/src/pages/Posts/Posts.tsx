import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import CustomGridContainer from "../../components/CustomGridContainer.tsx";
import { NewPostDialog } from "./Dialogs/NewPostDialog.tsx";
import { PostCardCustom } from "./PostCardCustom.tsx";
import { useRootStore } from "../../mst/Stores/RootStore.tsx";
import {IPostModel, IPostModelSnapshotOut} from "../../mst/Interfaces";

const Posts = observer(() => {
  const { posts, fetchPosts, havePosts } = useRootStore();

  useEffect(() => {
    fetchPosts().then(() => {
        console.log('Successful fetching posts')});
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <div className="text-center">
          <NewPostDialog />
        </div>
      </div>
      <CustomGridContainer>
        {!havePosts || posts.length === 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 1,
              m: 5,
            }}
          >
            <Typography>
              <h1>No Posts Here!</h1>
            </Typography>
          </Box>
        ) : (
          posts.map((post) => (
            <Grid item xs={12} md={6} lg={3} key={post.id}>
              <PostCardCustom post={post} />
            </Grid>
          ))
        )}
      </CustomGridContainer>
    </>
  );
});

export default Posts;
