import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "../axios.js";
import CustomGridContainer from "../components/CustomGridContainer.jsx";
import PostCardCustom from "../layout/PostCardCustom.jsx";

const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/posts")
            .then((response) => setPosts(response.data.posts))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <CustomGridContainer>
            {!posts || posts.length === 0 ? (
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
                        <PostCardCustom
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    </Grid>
                ))
            )}
        </CustomGridContainer>
    );
};

export default Posts;
