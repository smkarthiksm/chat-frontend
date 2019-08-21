import React from 'react';
import configureStore from "../../Redux Utilities/store"
import { Provider } from 'react-redux'

import { Redirect, Route } from "react-router-dom";

import * as Utility from '../../utilities/Utility';

import AppRoutes from '../../routes/AppRoutes';
const AppComponent = () => {
  return (
    <Provider store={configureStore()}>
      <AppRoutes />
    </Provider>
  );
}

export default AppComponent;
