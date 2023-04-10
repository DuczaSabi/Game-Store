import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import gamesReducer from "./reducers/gamesReducer";
import signInReducer from "./reducers/signInReducer";
import signUpReducer from "./reducers/signUpReducer";
import modifyGameReducer from "./reducers/modifyGameReducer";
import addGameReducer from "./reducers/addGameReducer";
import deleteGameReducer from "./reducers/deleteGameReducer";
import fetchGenresReducer from "./reducers/fetchGenresReducer";
import saveOrderReducer from "./reducers/saveOrderReducer";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
  games: gamesReducer,
  signin: signInReducer,
  signup: signUpReducer,
  modifygame: modifyGameReducer,
  addgame: addGameReducer,
  deletegame: deleteGameReducer,
  genres: fetchGenresReducer,
  order: saveOrderReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
