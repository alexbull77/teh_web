import React from 'react';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {Box} from "@mui/material";

const CustomDropDown = ({ handleCloseNavMenu, pages }) => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: {xs: "none", md: "flex"},
            }}
        >
            {pages.map((page) => (
                <Button
                    key={page.name}
                    component={Link}
                    to={page.link}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: "white", display: "block"}}
                >
                    {page.name}
                </Button>
            ))}
        </Box>
    );
};

export default CustomDropDown;