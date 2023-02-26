import { Box, createTheme } from "@mui/system";
import React from "react";
import GridCustom from "../layout/GridCustom";

const theme = createTheme({
    palette: {
        background: {
            paper: "#fff",
        },
        text: {
            primary: "#173A5E",
            secondary: "#46505A",
        },
        action: {
            active: "#001E3C",
        },
        success: {
            dark: "#009688",
        },
    },
});

const Posts = ({ posts }) => {
    console.log(">>Posts.jsx", posts);
    return (
        <>
            <Box
                sx={{
                    bgcolor: "background.paper",
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                }}
            >
                <GridCustom posts={posts} />
            </Box>
        </>
    );
};

export default Posts;