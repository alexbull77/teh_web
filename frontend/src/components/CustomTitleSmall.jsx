import React from 'react';
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

const CustomTitleSmall = ({ text }) => {
    return (
        <Typography
            variant='h5'
            noWrap
            component={Link}
            to='/'
            sx={{
                mr: 2,
                display: {xs: "flex", md: "none"},
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
            }}
        >
            { text }
        </Typography>
    );
};

export default CustomTitleSmall;