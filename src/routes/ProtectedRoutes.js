import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";

import LeftNavBarComponent from "../components/LeftNavBar/LeftNavBarComponent";
import LoaderComponent from "../components/Loader/LoaderComponent";
import ModalComponent from "../components/Modal/ModalComponent";
import * as Utility from '../utilities/Utility';
const ProtectedRoutes = ({ path: Path, component: Component, ...rest }) => {
  return (
    <Fragment>
      {Utility.getJWT() && Utility.validateJWT() ?
        <Fragment>
          <LoaderComponent />
          <ModalComponent />
          <div className="row col-md-12">
            <LeftNavBarComponent />
            <Route {...rest}
              render={props =>
                <Component {...props} />
              } />
          </div>
        </Fragment>
        :
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      }
    </Fragment>
  );
};
export default ProtectedRoutes;
