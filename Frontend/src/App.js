import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import SignInPage from "./pages/signInPage";
import CartPage from "./pages/cartPage";
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signin" exact>
          <SignInPage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
