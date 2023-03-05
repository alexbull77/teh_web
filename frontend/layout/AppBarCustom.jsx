import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Link, useNavigate} from "react-router-dom";
import axiosInstance from "../src/axios.js";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

const pages = [
    {
        name: "Blog",
        link: "/posts",
    },
    {
        name: "Products",
        link: "/products",
    },
    {
        name: "Pricing",
        link: "",
    },
];

function AppBarCustom({ isAuth, setIsAuth }) {

    console.log(isAuth)

    const navigate = useNavigate()

    const settings = isAuth
        ? [
              {
                  name: "Profile",
                  link: "",
              },
          ]
        : [
              {
                  name: "SignIn",
                  link: "signin",
              },
          ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        const response = axiosInstance.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        handleClose();
        handleCloseUserMenu();
        setIsAuth(false);
        navigate('/signin');
    }

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <FreeBreakfastIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant='h6'
                        noWrap
                        component={Link}
                        to='/'
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "Lato",
                            fontWeight: 500,
                            letterSpacing: ".1rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Drink Tea With Us!
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
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
                                display: { xs: "block", md: "none" },
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
                    </Box>
                    <FreeBreakfastIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant='h5'
                        noWrap
                        component={Link}
                        to='/'
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Drink Tea With Us!
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.link}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title='Open settings'>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt='Remy Sharp'
                                    src='https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    component={Link}
                                    to={setting.link}
                                    key={setting.name}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign='center'>
                                        {setting.name}
                                    </Typography>
                                </MenuItem>

                            ))}
                            {
                                isAuth && (
                                    <MenuItem
                                        onClick={handleClickOpen}
                                    >
                                        <Typography textAlign='center'>
                                            Logout
                                        </Typography>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {"Are you sure you want to logout?"}
                                            </DialogTitle>
                                            <DialogActions>
                                                <Button onClick={handleClose} autoFocus>Back</Button>
                                                <Button onClick={handleLogout}>
                                                    Logout
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </MenuItem>
                                )
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppBarCustom;
