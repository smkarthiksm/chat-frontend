import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import LeftNavBarComponent from "../components/LeftNavBar/LeftNavBarComponent";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
const DashboardContainer = () => {
  return (
    <div className="row">
      <LeftNavBarComponent />
      <ProtectedRoutes path="/dashboard" component={DashboardComponent} />
    </div>
  );
}
export default DashboardContainer;
