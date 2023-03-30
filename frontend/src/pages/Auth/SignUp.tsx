import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {UserModel} from "../../mst/Models/UserModel";
import {useRootStore} from "../../mst/Stores/RootStore";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const navigate = useNavigate();
  const { currentUser, fetchUsers, haveUsers, userIsRegistered, registerUser} = useRootStore();
  const [newUser, setNewUser] = useState(UserModel.create({}))

  useEffect(() => {
    if (!haveUsers) fetchUsers();
    console.log('fetch users')
  }, [])

  const handleUsernameChange = (event) => {
    newUser.changeUsername(event.target.value);
    console.log(newUser.username);
  };

  const handlePasswordChange = (event) => {
    newUser.changePassword(event.target.value);
    console.log(newUser.password)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentUser === undefined) {
      if (userIsRegistered(newUser)) {
        alert('User with this username and password already exists, please Sign In');
        navigate('/signin');
      } else {
        registerUser(newUser);
        alert('New User Created! Please login')
        navigate('/signin');
      }
    } else {
      alert ('You are already logged in')
      navigate('/products')
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleUsernameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                variant={"outlined"}
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
