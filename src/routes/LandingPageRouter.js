import React, { Fragment } from 'react';
import { Route, Redirect } from "react-router-dom";

import LoginComponent from "../components/Login/LoginComponent"
import * as Utility from '../utilities/Utility';
const AuthorizedComponent = () => {
  return (
    <Fragment>
      {Utility.getJWT() ?
        <Route render={() => <Redirect
          to={{
            pathname: "/dashboard",
          }} />
        } />
        :
        <Route component={LoginComponent} />
      }
    </Fragment>
  );
}

export default AuthorizedComponent;