import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "../components/Login/LoginComponent"
import DashboardComponent from "../components/Dashboard/DashboardComponent"
import NotFoundComponent from "../components/NotFound/NotFoundComponent";
import SignupComponent from "../components/Signup/SignupComponent";
const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginComponent} />
        <Route path="/signup" component={SignupComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  );
}


export default AppRoutes;