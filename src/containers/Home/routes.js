import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./index";
// import UserPost from "./Transactions";

const App = ({ match }) => {
  return (
    <div className="app-main">
      <Switch>
        <Redirect exact from={`${match.url}`} to={`${match.url}/users`} />
        <Route path={`${match.url}/users`} component={Users} />
        {/* <Route path={`${match.url}/user/:id`} component={UserPost} /> */}
      </Switch>
    </div>
  );
};

export default App;
