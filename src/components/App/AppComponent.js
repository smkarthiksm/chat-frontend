import React from 'react';
import configureStore from "../../Redux Utilities/store"
import { Provider, connect } from 'react-redux'
import AppRoutes from '../../routes/AppRoutes';
function AppComponent() {
  return (
    <Provider store={configureStore()}>
    
      <AppRoutes />
    </Provider>
  );
}

export default AppComponent;
