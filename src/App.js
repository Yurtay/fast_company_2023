import React from "react";
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import NavBar from "./components/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users/:userId?" component={Users} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
