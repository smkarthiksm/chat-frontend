import React from 'react';
import './DashboardComponent.scss'
import ModalComponent from '../Modal/ModalComponent'
const DashboardComponent = (props) => {
  return (
    <div className="col-md-10 dashboard-component-container">
      Dashboard component
      <ModalComponent/>
    </div>
  );
}
export default DashboardComponent;