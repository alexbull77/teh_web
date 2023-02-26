import { Box } from "@mui/system";
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
            <GridCustom posts={posts} />
        </Box>
    );
};

export default Posts;
