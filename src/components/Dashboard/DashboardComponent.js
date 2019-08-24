import React from 'react';
import './DashboardComponent.scss'
import DirectMessageModalComponent from '../DirectMessageModal/DirectMessageModalComponent';

const DashboardComponent = (props) => {
  return (
    <div className="col-md-10 dashboard-component-container">
      Dashboard component
      <DirectMessageModalComponent />
    </div>
  );
}
export default DashboardComponent;