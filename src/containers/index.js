import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainContainer from "./Home/routes";
import Login from "./Home/Login/index";
import SignUp from "./Signup";

const App = ({ match }) => {
  return (
    <div className="app-main">
      <Switch>
        <Redirect exact from={`${match.url}`} to={`${match.url}home`} />
        <Route path={`${match.url}login`} component={Login} />
        <Route path={`${match.url}signup`} component={SignUp} />
        <Route path={`${match.url}home`} component={MainContainer} />
      </Switch>
    </div>
  );
};

export default App;
