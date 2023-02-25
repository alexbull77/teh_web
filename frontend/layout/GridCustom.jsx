import { Grid } from "@mui/material";
import React from "react";
import PostCardCustom from "./PostCardCustom";

const GridCustom = ({ posts }) => {
    return (
        <Grid container my={6} rowSpacing={5} columnSpacing={5}>
            {!posts.length ? (
                <div>No posts available</div>
            ) : (
                posts.map((post) => (
                    <Grid item xs={12} md={6} lg={3}>
                        <PostCardCustom
                            key={post.id}
                            title={post.title}
                            short_description={post.short_description}
                            images={post.images}
                        />
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default GridCustom;
