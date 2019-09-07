import React from 'react';
import configureStore from "../../reduxUtilities/store"
import { Provider } from 'react-redux'

import AppRoutes from '../../routes/AppRoutes';
const AppComponent = () => {
  return (
    <Provider store={configureStore()}>
      <AppRoutes />
    </Provider>
  );
}

export default AppComponent;
