import { Box, Typography } from "@mui/material";
import React from "react";
import GridCustom from "../layout/GridCustom";

const Posts = ({ posts }) => {
    // console.log(">>Posts", posts);
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
                <GridCustom posts={posts} />
            )}
        </Box>
    );
};

export default Posts;
