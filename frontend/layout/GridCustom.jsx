import { Grid } from "@mui/material";
import React from "react";
import PostCardCustom from "./PostCardCustom";

const GridCustom = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={6}>
                    <PostCardCustom />
                </Grid>
                <Grid item xs={6}>
                    <PostCardCustom />
                </Grid>
                <Grid item xs={6}>
                    <PostCardCustom />
                </Grid>
                <Grid item xs={6}>
                    <PostCardCustom />
                </Grid>
                <Grid item xs={6}>
                    <PostCardCustom />
                </Grid>
                <Grid item xs={6}>
                    <PostCardCustom />
                </Grid>
            </Grid>
        </div>
    );
};

export default GridCustom;
