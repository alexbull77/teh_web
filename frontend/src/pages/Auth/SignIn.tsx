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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRootStore } from "../../mst/Stores/RootStore";
import { UserModel } from "../../mst/Models/UserModel";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 8, mb: 4 }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        My Shitty Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const { currentUser, fetchUsers, setCurrentUser, haveUsers } = useRootStore();
  const navigate = useNavigate();
  const newUser = UserModel.create({});

  useEffect(() => {
    if (!haveUsers) fetchUsers();
    console.log("fetch users");
  }, []);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    newUser.changeUsername(event.target.value);
    // console.log(newUser.username);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    newUser.changePassword(event.target.value);
    // console.log(newUser.password);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (currentUser === undefined) {
      if (setCurrentUser(newUser)) {
        alert("User saved as current");
        navigate("/products");
      } else {
        alert("User not found in registered users! Please Sign Up");
        navigate("/signup");
      }
    } else {
      alert("You are already logged in");
      navigate("/products");
    }
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
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
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
      <Copyright />
    </Container>
  );
}
