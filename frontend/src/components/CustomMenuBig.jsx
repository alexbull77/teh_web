import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

const CustomMenuBig = ({anchorElNav, handleCloseNavMenu, pages}) => {
    return (
        <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: {xs: "block", md: "none"},
            }}
        >
            {pages.map((page) => (
                <MenuItem
                    component={Link}
                    to={page.link}
                    key={page.name}
                    onClick={handleCloseNavMenu}
                >
                    <Typography textAlign='center'>
                        {page.name}
                    </Typography>
                </MenuItem>
            ))}
        </Menu>
    );
};

export default CustomMenuBig;