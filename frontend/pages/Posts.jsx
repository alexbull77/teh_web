import { Box, Typography } from "@mui/material";
import React from "react";
import GridCustom from "../layout/GridCustom";

const Posts = ({ posts }) => {
    console.log(">>Posts", posts);
    return (
        <Box
            sx={{
                bgcolor: "#fff",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
            }}
        >
            {!posts ? (
                <Typography>No Posts Here!</Typography>
            ) : (
                <GridCustom posts={posts} />
            )}
        </Box>
    );
};

export default Posts;
