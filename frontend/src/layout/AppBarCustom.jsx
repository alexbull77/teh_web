import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Dialog, DialogContent } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios.js";
import CustomDropDown from "../components/CustomDropDown.jsx";
import CustomIconButton from "../components/CustomIconButton.jsx";
import CustomMenuBig from "../components/CustomMenuBig.jsx";
import CustomRightMenu from "../components/CustomRightMenu/CustomRightMenu.jsx";
import CustomTitleBig from "../components/CustomTitleBig.jsx";
import CustomTitleSmall from "../components/CustomTitleSmall.jsx";

const pages = [
    {
        name: "Blog",
        link: "/post",
    },
    {
        name: "Products",
        link: "/product",
    },
    {
        name: "Pricing",
        link: "",
    },
];

function AppBarCustom({ isAuth, setIsAuth }) {
    // console.log(isAuth)

    // const navigate = useNavigate()

    // const settings = isAuth
    //     ? [
    //         {
    //             name: "Profile",
    //             link: "",
    //         },
    //     ]
    //     : [
    //         {
    //             name: "SignIn",
    //             link: "signin",
    //         },
    //     ];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    //
    // const handleClose = () => {
    //     setOpen(false);
    // };

    console.log(open);
    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // const handleLogout = () => {
    //     const response = axiosInstance.post('user/logout/blacklist/', {
    //         refresh_token: localStorage.getItem('refresh_token'),
    //     });
    //     localStorage.removeItem('access_token');
    //     localStorage.removeItem('refresh_token');
    //     axiosInstance.defaults.headers['Authorization'] = null;
    //     handleClose();
    //     handleCloseUserMenu();
    //     setIsAuth(false);
    //     navigate('/signin');
    // }

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <FreeBreakfastIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <CustomTitleBig text={"Drink Tea With Us!"} />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <CustomIconButton setAnchorElNav={setAnchorElNav} />

                        <CustomMenuBig
                            anchorElNav={anchorElNav}
                            handleCloseNavMenu={handleCloseNavMenu}
                            pages={pages}
                        />
                    </Box>
                    <FreeBreakfastIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    {/*<Typography*/}
                    {/*    variant='h5'*/}
                    {/*    noWrap*/}
                    {/*    component={Link}*/}
                    {/*    to='/'*/}
                    {/*    sx={{*/}
                    {/*        mr: 2,*/}
                    {/*        display: {xs: "flex", md: "none"},*/}
                    {/*        flexGrow: 1,*/}
                    {/*        fontFamily: "monospace",*/}
                    {/*        fontWeight: 700,*/}
                    {/*        letterSpacing: ".3rem",*/}
                    {/*        color: "inherit",*/}
                    {/*        textDecoration: "none",*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    Drink Tea With Us!*/}
                    {/*</Typography>*/}
                    <CustomTitleSmall text={"Drink Tea With Us!"} />
                    {/*<Box*/}
                    {/*    sx={{*/}
                    {/*        flexGrow: 1,*/}
                    {/*        display: {xs: "none", md: "flex"},*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {pages.map((page) => (*/}
                    {/*        <Button*/}
                    {/*            key={page.name}*/}
                    {/*            component={Link}*/}
                    {/*            to={page.link}*/}
                    {/*            onClick={handleCloseNavMenu}*/}
                    {/*            sx={{my: 2, color: "white", display: "block"}}*/}
                    {/*        >*/}
                    {/*            {page.name}*/}
                    {/*        </Button>*/}
                    {/*    ))}*/}
                    {/*</Box>*/}
                    <CustomDropDown
                        handleCloseNavMenu={handleCloseNavMenu}
                        pages={pages}
                    />

                    <CustomRightMenu
                        isAuth={isAuth}
                        setIsAuth={setIsAuth}
                        handleOpenUserMenu={handleOpenUserMenu}
                        anchorElUser={anchorElUser}
                        handleCloseUserMenu={handleCloseUserMenu}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppBarCustom;
