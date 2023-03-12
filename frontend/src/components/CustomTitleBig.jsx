import React from 'react';
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

const CustomTitleBig = ({text}) => {
    return (
        <Typography
            variant='h6'
            noWrap
            component={Link}
            to='/'
            sx={{
                mr: 2,
                display: {xs: "none", md: "flex"},
                fontFamily: "Lato",
                fontWeight: 500,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
            }}
        >
            {text}
        </Typography>
    );
};

export default CustomTitleBig;