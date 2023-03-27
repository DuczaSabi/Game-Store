import React from "react";
import "../stylesheets/loginStyle.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const signInButton = {
  position: "absolute",
  bottom: 20,
  left: 20,
};

const guestButton = {
  position: "absolute",
  bottom: -55,
  right: 0,
  color: "white",
};

const loginButton = {
  position: "absolute",
  bottom: 20,
  right: 20,
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Paper
        elevation={3}
        text-align="center"
        sx={{
          position: "relative",
          width: 550,
          height: 350,
          paddingLeft: 2,
          margin: "auto",
          marginTop: 25,
        }}
      >
        <h1>Login</h1>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, mb: 1.5 }} />
          <TextField
            id="input-username"
            label="Username  "
            variant="standard"
            sx={{ margin: 1, width: 350 }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockIcon sx={{ color: "action.active", mr: 1, mb: 1.5 }} />
          <FormControl sx={{ m: 1, width: 350 }} variant="standard">
            <InputLabel htmlFor="input-password">Password</InputLabel>
            <Input
              id="input-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Button href="/signin" size="large" style={signInButton}>
          Don't have an account yet?
        </Button>
        <Button
          size="large"
          href="/"
          style={guestButton}
          endIcon={<ArrowForwardIos />}
        >
          Continue to page (As guest)
        </Button>
        <Button size="large" variant="contained" href="" style={loginButton}>
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default LoginPage;
