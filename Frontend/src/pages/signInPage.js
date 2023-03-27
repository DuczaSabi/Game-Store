import React from "react";
import "../stylesheets/loginStyle.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import LockResetIcon from "@mui/icons-material/LockReset";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const loginButton = {
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

const signInButton = {
  position: "absolute",
  bottom: 20,
  right: 20,
};

const SignInPage = () => {
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
          width: 550,
          height: 480,
          position: "relative",
          paddingLeft: 2,
          margin: "auto",
          marginTop: 25,
        }}
      >
        <h1>Sign In</h1>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <EmailIcon sx={{ color: "action.active", mr: 1, mb: 1.5 }} />
          <TextField
            id="input-email"
            label="Email  "
            variant="standard"
            sx={{ margin: 1, width: 350 }}
          />
        </Box>

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

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockResetIcon sx={{ color: "action.active", mr: 1, mb: 1.5 }} />
          <FormControl sx={{ m: 1, width: 350 }} variant="standard">
            <InputLabel htmlFor="input-password-again">
              Password again
            </InputLabel>
            <Input
              id="input-password-again"
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

        <Button href="/login" size="small" style={loginButton}>
          Already have an account?
        </Button>
        <Button
          size="large"
          href="/"
          style={guestButton}
          endIcon={<ArrowForwardIos />}
        >
          Continue to page (As guest)
        </Button>
        <Button size="large" variant="contained" href="" style={signInButton}>
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default SignInPage;
