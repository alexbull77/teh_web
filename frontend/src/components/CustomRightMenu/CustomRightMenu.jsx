import { Box, Dialog, DialogContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios.js";

const CustomRightMenu = (
    { isAuth, setIsAuth, handleOpenUserMenu },
    anchorElUser,
    handleCloseUserMenu
) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                  link: "/signin",
              },
          ];

    const handleLogout = () => {
        const response = axiosInstance.post("user/logout/blacklist/", {
            refresh_token: localStorage.getItem("refresh_token"),
        });
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosInstance.defaults.headers["Authorization"] = null;
        handleClose();
        handleCloseUserMenu();
        setIsAuth(false);
        navigate("/signin");
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                        {/*<Typography textAlign='center'>*/}
                        {/*    {setting.name}*/}
                        {/*</Typography>*/}
                        <Button>{setting.name}</Button>
                    </MenuItem>
                ))}
                {isAuth && (
                    <MenuItem
                        onClick={() => {
                            handleCloseUserMenu();
                            handleClickOpen();
                        }}
                    >
                        {/*<Typography textAlign='center'>*/}
                        {/*    Logout*/}
                        {/*</Typography>*/}
                        <Button onClick={handleClickOpen}>Logout</Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby='alert-dialog-title'
                            aria-describedby='alert-dialog-description'
                        >
                            <DialogTitle id='alert-dialog-title'>
                                {"Are you sure you want to logout?"}
                            </DialogTitle>
                            <DialogContent>Hey There!</DialogContent>
                            <DialogActions>
                                <Button onClick={() => setOpen(false)}>
                                    Back
                                </Button>
                                <Button onClick={handleLogout}>Logout</Button>
                            </DialogActions>
                        </Dialog>
                    </MenuItem>
                )}
            </Menu>
        </Box>
    );
};

export default CustomRightMenu;
