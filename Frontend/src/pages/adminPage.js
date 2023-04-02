import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchGames } from "../store/actions/games.js";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import AddIcon from "@mui/icons-material/Add";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const title = {
  marginTop: "100px",
  marginBottom: "0px",
};

const modifyButton = {
  position: "absolute",
  bottom: 20,
  right: 20,
};

const deleteButton = {
  position: "absolute",
  top: 225,
  right: 20,
};

const inputField = {
  margin: 20,
  width: "80%",
};

const paperModify = {
  display: "inline-block",
  position: "relative",
  minWidth: 425,
  width: "40%",
  height: 900,
  paddingLeft: "15px",
  margin: "auto",
  marginLeft: "25px",
  marginTop: "25px",
};

const paperNew = {
  display: "inline-block",
  position: "relative",
  minWidth: 425,
  width: "40%",
  height: 757,
  paddingLeft: "15px",
  margin: "auto",
  marginLeft: "25px",
  marginTop: "25px",
};

const AdminPage = () => {
  let alertSeverity;
  let alertText;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames("all", null));
  }, []);

  function deleteButtonClick() {
    alertSeverity = "error";
    alertText = "Product successfully deleted from database!";
    console.log(alertSeverity + " " + alertText);
    handleClick();
  }

  function modifyButtonClick() {
    alertSeverity = "info";
    alertText = "Product data successfully modified!";
    console.log(alertSeverity + " " + alertText);
    handleClick();
  }

  function addButtonClick() {
    alertSeverity = "success";
    alertText = "Product successfully added to database!";
    console.log(alertSeverity + " " + alertText);
    handleClick();
  }

  const gameState = useSelector((state) => state.games);
  const { data, isFetching, errorMessage } = gameState;

  const gameTitles = [];
  if (isFetching) {
    console.log("Loading products");
  } else if (errorMessage) {
    console.log("error");
  } else if (data && data.length > 0) {
    data.map((game, index) => gameTitles.push(game.Title));
  } else {
    console.log("");
  }

  let gameTitle = "";

  function gameSelected() {
    gameTitle = "asd";
  }

  return (
    <>
      <Paper elevation={3} text-align="center" style={paperModify}>
        <h1>Search for game</h1>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          onSelect={gameSelected}
          options={gameTitles}
          sx={{ width: "98%" }}
          renderInput={(params) => <TextField {...params} label="Games" />}
        />
        <Button
          size="large"
          variant="contained"
          color="error"
          style={deleteButton}
          startIcon={<DeleteIcon />}
          onClick={deleteButtonClick}
        >
          Delete
        </Button>

        <h1 style={title}>Modifications</h1>
        <TextField
          id="input-modified-title"
          label="Title"
          variant="standard"
          style={inputField}
        />
        <TextField
          id="input-modified-img"
          label="Image url"
          variant="standard"
          style={inputField}
        />
        <TextField
          id="input-modified-genre"
          label="Genre"
          variant="standard"
          style={inputField}
        />
        <TextField
          id="input-modified-ref"
          label="Reference url"
          variant="standard"
          style={inputField}
        />
        <TextField
          id="input-modified-price"
          label="Price"
          variant="standard"
          style={inputField}
        />
        <Button
          size="large"
          variant="contained"
          style={modifyButton}
          startIcon={<AutoFixHighIcon />}
          onClick={modifyButtonClick}
        >
          Modify
        </Button>
      </Paper>

      <Paper elevation={3} text-align="center" style={paperNew}>
        <h1>Add new product</h1>
        <TextField
          id="input-new-title"
          label="Title"
          variant="standard"
          style={inputField}
        />
        <TextField
          id="input-new-img"
          label="Image url"
          variant="standard"
          style={inputField}
        />
        <TextField
          id="input-new-genre"
          label="Genre"
          variant="standard"
          style={inputField}
        />
        <TextField
          id="input-new-date"
          label="Release date"
          variant="standard"
          style={inputField}
        />
        <TextField
          id="input-new-ref"
          label="Reference url"
          variant="standard"
          style={inputField}
        />
        <TextField
          id="input-new-price"
          label="Price"
          variant="standard"
          style={inputField}
        />

        <Button
          size="large"
          variant="contained"
          color="success"
          style={modifyButton}
          startIcon={<AddIcon />}
          onClick={addButtonClick}
        >
          Add
        </Button>
      </Paper>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertText}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AdminPage;
