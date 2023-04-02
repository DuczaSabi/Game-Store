import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchGames } from "../store/actions/games.js";
import { modifyGame } from "../store/actions/modifyGame.js";
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
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);
  const [alertText, setAlertText] = React.useState("");
  const [alertSeverity, setAlertSeverity] = React.useState("");
  const [titleInput, setTitleInput] = React.useState("");
  const [selectedGame, setSelectedGame] = React.useState(null);

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
    dispatch(fetchGames("all", titleInput, 1, 20));
  }, [titleInput, dispatch]);

  function deleteButtonClick() {
    setAlertSeverity("error");
    setAlertText("Product successfully deleted from database!");
    handleClick();
  }

  function modifyButtonClick() {
    dispatch(modifyGame(selectedGame));
    console.log(selectedGame);
    setAlertSeverity("info");
    setAlertText("Product data successfully modified!");
    handleClick();
  }

  function addButtonClick() {
    setAlertSeverity("success");
    setAlertText("Product successfully added to database!");
    handleClick();
  }

  function selectGame(title) {
    const searchedGame = data.data.find((game) => game.Title === title);
    console.log(searchedGame);
    setSelectedGame(searchedGame);
  }

  const gameState = useSelector((state) => state.games);
  const { data, isFetching, errorMessage } = gameState;

  const gameTitles = [];
  if (isFetching) {
  } else if (errorMessage) {
    console.log("error");
  } else if (data && data.data.length > 0) {
    data.data.map((game, index) => gameTitles.push(game.Title));
  } else {
    console.log("");
  }

  return (
    <>
      <Paper elevation={3} text-align="center" style={paperModify}>
        <h1>Search for game</h1>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={gameTitles}
          onChange={(e, newValue) => selectGame(newValue)}
          sx={{ width: "98%" }}
          renderInput={(params) => <TextField {...params} label="Games" />}
          onInputChange={(event, newValue) => setTitleInput(newValue)}
          inputValue={titleInput}
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
          value={(selectedGame && selectedGame.Title) ?? ""}
          onChange={(e) =>
            setSelectedGame({ ...selectedGame, Title: e.target.value })
          }
        />
        <TextField
          id="input-modified-img"
          label="Image url"
          variant="standard"
          style={inputField}
          value={(selectedGame && selectedGame.Image) ?? ""}
          onChange={(e) =>
            setSelectedGame({ ...selectedGame, Image: e.target.value })
          }
        />
        <TextField
          id="input-modified-genre"
          label="Genre"
          variant="standard"
          style={inputField}
          value={(selectedGame && selectedGame.Genre) ?? ""}
          onChange={(e) =>
            setSelectedGame({ ...selectedGame, Genre: e.target.value })
          }
        />
        <TextField
          id="input-modified-ref"
          label="Reference url"
          variant="standard"
          style={inputField}
          value={(selectedGame && selectedGame.Link) ?? ""}
          onChange={(e) =>
            setSelectedGame({ ...selectedGame, Link: e.target.value })
          }
        />
        <TextField
          id="input-modified-price"
          label="Price"
          variant="standard"
          style={inputField}
          value={(selectedGame && selectedGame.Price) ?? ""}
          onChange={(e) =>
            setSelectedGame({ ...selectedGame, Price: e.target.value })
          }
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
