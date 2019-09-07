import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ChatComponent from "../components/Chat/ChatComponent";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
import LandingPageRouter from "./LandingPageRouter";
import NotFoundComponent from "../components/NotFound/NotFoundComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import SignupComponent from "../components/Signup/SignupComponent";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <LandingPageRouter exact path="/" />
        <Route path="/signup" component={SignupComponent} />
        <ProtectedRoutes path="/dashboard" component={DashboardComponent} />
        <ProtectedRoutes exact path="/chatId=:chatId" component={ChatComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  );
}
export default AppRoutes;