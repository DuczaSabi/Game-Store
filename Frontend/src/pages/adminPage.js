import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchGames } from "../store/actions/games.js";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

const modifyButton = {
  position: "absolute",
  bottom: 20,
  right: 20,
};

const inputField = {
  margin: 20,
  width: 350,
};

const AdminPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames("all", null));
  }, []);

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
      <Paper
        elevation={3}
        text-align="center"
        sx={{
          display: "inline-block",
          position: "relative",
          width: 450,
          height: 215,
          paddingLeft: 2,
          margin: "auto",
          marginTop: "25px",
        }}
      >
        <h1>Search for game</h1>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          onSelect={gameSelected}
          options={gameTitles}
          sx={{ width: 435 }}
          renderInput={(params) => <TextField {...params} label="Games" />}
        />
      </Paper>

      <Paper
        elevation={3}
        text-align="center"
        sx={{
          display: "block",
          position: "relative",
          minWidth: 450,
          width: "70%",
          height: "100%",
          paddingLeft: 2,
          margin: "auto",
          marginTop: "25px",
        }}
      >
        <h1>Modifications</h1>
        <TextField
          id="input-selected-title"
          label="Selected game title"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          style={inputField}
        />
        <TextField
          id="input-modified-title"
          label="Modified game title"
          variant="standard"
          style={inputField}
        />

        <br></br>
        <br></br>

        <TextField
          id="input-selected-genres"
          label="Selected game genres"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          style={inputField}
        />
        <TextField
          id="input-modified-genres"
          label="Modified game genres"
          variant="standard"
          style={inputField}
        />

        <br></br>
        <br></br>

        <TextField
          id="input-selected-price"
          label="Selected game price"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          style={inputField}
        />
        <TextField
          id="input-modified-price"
          label="Modified game price"
          variant="standard"
          style={inputField}
        />

        <Button size="large" variant="contained" style={modifyButton}>
          Modify
        </Button>
      </Paper>
    </>
  );
};

export default AdminPage;
