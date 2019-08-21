import React from "react";
import { Redirect, Route } from "react-router-dom";

import * as Utility from '../utilities/Utility';
const ProtectedRoutes = ({ component: Component }) => {
  return (
    <Route
      render={props =>
        Utility.getJWT() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};
export default ProtectedRoutes;
