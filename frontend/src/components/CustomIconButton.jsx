import React, {useState} from 'react';
import MenuIcon from "@mui/icons-material/Menu.js";
import IconButton from "@mui/material/IconButton";

const CustomIconButton = ({ setAnchorElNav }) => {


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    return (
        <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
        >
            <MenuIcon/>
        </IconButton>
    );
};

export default CustomIconButton;