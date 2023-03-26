import { Box, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import CustomGridContainer from "../components/CustomGridContainer.jsx";
import { PostCardCustom } from "../layout/PostCardCustom.jsx";
import { useRootStore } from "../MST/Stores/RootStore.jsx";

const Posts = observer(() => {
    // const [posts, setPosts] = useState(null);

    const { posts, fetchPosts, havePosts } = useRootStore();

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <CustomGridContainer>
            {!havePosts || posts.length === 0 ? (
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
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
    );
});

export default Posts;
