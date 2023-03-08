import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import PostCardCustom from "../layout/PostCardCustom.jsx";
import CustomGridContainer from "../components/CustomGridContainer.jsx";

const Posts = ({posts}) => {
    return (
        <CustomGridContainer>
            {!posts || posts.length === 0 ? (
                < Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        width: 1,
                        m: 5,
                    }}>
                    <Typography>
                        <h1>No Posts Here!</h1>
                    </Typography>
                </Box>
            ) : (
                posts?.map((post) => (
                    <Grid item xs={12} md={6} lg={3} key={post.id}>
                        <PostCardCustom
                            id={post.id}
                            title={post.title}
                            short_description={post.short_description}
                            images={post.images}
                        />
                    </Grid>
                ))
            )}
        </CustomGridContainer>
    );
};

export default Posts;
