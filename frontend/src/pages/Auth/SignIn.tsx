import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {useRootStore} from "../../mst/Stores/RootStore";
import {UserModel} from "../../mst/Models/UserModel";
// import axiosInstance from "../../axios";

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

export default function SignIn() {
  const { fetchUsers, saveUserToStorage} = useRootStore();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(UserModel.create({}))
  // freezing the obj so it cannot be changed
  // const initialFormData = Object.freeze({
  //   email: "",
  //   password: "",
  // });

  useEffect(() => {
    fetchUsers();
  }, [])

  // const [formData, updateFormData] = useState(initialFormData);

  const handleUsernameChange = (event) => {
    newUser.changeUsername(event.target.value);
    console.log(newUser.username);


    // updateFormData({
    //   ...formData,
    //   // Trimming any whitespace
    //   [event.target.name]: event.target.value.trim(),
    // });
  };

  const handlePasswordChange = (event) => {
    newUser.changePassword(event.target.value);
    console.log(newUser.password)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (saveUserToStorage(newUser)) {
      alert('User saved on storage')
      navigate("/products");
    } else {
      alert('User not found in registered users!')
      navigate('/signup');
    }

    // console.log(formData);
    //
    // axiosInstance
    //   .post("token/", {
    //     email: formData.email,
    //     password: formData.password,
    //   })
    //   .then((res) => {
    //     localStorage.setItem("access_token", res.data.access);
    //     localStorage.setItem("refresh_token", res.data.refresh);
    //     axiosInstance.defaults.headers["Authorization"] =
    //       "JWT " + localStorage.getItem("access_token");
    //     // setIsAuth(true);
    //     navigate("/");
    //   });
  };

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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleUsernameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                variant={"outlined"}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
