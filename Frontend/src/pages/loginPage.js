import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/actions/signIn";
import "../stylesheets/loginStyle.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { Redirect } from "react-router-dom";

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
  const dispatch = useDispatch();

  const userStore = useSelector((state) => state.signin);
  const { user, isFetching, isAuthenticated, errorMessage } = userStore;

  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLoginBtnClicked = () => {
    console.log(email, password);
    dispatch(signIn(email, password));
  };

  return (
    <>
      {isAuthenticated && <Redirect push to="/"></Redirect>}
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
            <EmailIcon sx={{ color: "action.active", mr: 1, mb: 1.5 }} />
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="input-email"
              label="Email  "
              variant="standard"
              sx={{ margin: 1, width: 350 }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockIcon sx={{ color: "action.active", mr: 1, mb: 1.5 }} />
            <FormControl sx={{ m: 1, width: 350 }} variant="standard">
              <InputLabel htmlFor="input-password">Password</InputLabel>
              <Input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
            style={guestButton}
            endIcon={<ArrowForwardIos />}
          >
            Continue to page (As guest)
          </Button>
          <Button
            size="large"
            variant="contained"
            style={loginButton}
            onClick={() => handleLoginBtnClicked()}
          >
            Login
          </Button>
        </Paper>
      </div>
    </>
  );
};

export default LoginPage;
