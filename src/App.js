import React from "react";
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import { ProfessionProvider } from "./app/hooks/useProfession";
import { QualitiesProvider } from "./app/hooks/useQualities";
import AuthProvider from "./app/hooks/useAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <QualitiesProvider>
          <ProfessionProvider>
            <Switch>
              <Route exact path="/login/:type?" component={Login} />
              <Route exact path="/users/:userId?/:edit?" component={Users} />
              <Route exact path="/" component={Main} />
              <Redirect to="/" />
            </Switch>
          </ProfessionProvider>
        </QualitiesProvider>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
