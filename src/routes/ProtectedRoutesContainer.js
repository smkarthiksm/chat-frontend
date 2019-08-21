import React, { Fragment } from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
const DashboardContainer = () => (
  <Fragment>
    <h1>HEADER</h1>
    <ProtectedRoutes path="/dashboard" component={DashboardComponent} />
  </Fragment>
)
export default DashboardContainer;
