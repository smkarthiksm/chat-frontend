import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundComponent from "../components/NotFound/NotFoundComponent";
import SignupComponent from "../components/Signup/SignupComponent";

import LandingPageRouter from "./LandingPageRouter";
import ProtectedRoutes from "./ProtectedRoutes";
import ProtectedRoutesContainer from "./ProtectedRoutesContainer";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <LandingPageRouter exact path="/" />
        <Route path="/signup" component={SignupComponent} />
        <ProtectedRoutes component={ProtectedRoutesContainer} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  );
}
export default AppRoutes;