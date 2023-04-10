import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import SignInPage from "./pages/signInPage";
import CartPage from "./pages/cartPage";
import AdminPage from "./pages/adminPage";
import history from "./utils/history";
import PaymentSucess from "./pages/paymentSuccess";
import ProtectedRoute from "./components/ProtectedRoute";

function App () {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signin" exact>
          <SignInPage />
        </Route>
        <Route path="/" exact>
          <ProtectedRoute path="/" component={ HomePage }></ProtectedRoute>
        </Route>
        <Route path="/cart" exact>
          <ProtectedRoute path="/cart" component={ CartPage }></ProtectedRoute>
        </Route>
        <Route path="/payment/success" exact>
          <PaymentSucess />
        </Route>
        {/* <ProtectedRoute
          path="/payment/success"
          component={ PaymentSucess }
        ></ProtectedRoute> */}

        <Route path="/admin" exact>
          <ProtectedRoute path="/admin" component={ AdminPage }></ProtectedRoute>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
