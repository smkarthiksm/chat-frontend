import React from 'react';
import './LeftNavBarComponent.scss';
import { connect } from 'react-redux';
import * as actions from '../../actions/LeftNavBarAction';
const LeftNavBarComponent = (props) => {
  return (
    <div className="col-md-2 nav-bar-container">
      <div className="logo-image-container">
        <i className="fas fa-comment-dots"></i>
        <h6>Tech Fellas</h6>
      </div>
      <div className="channels-container">
        <div className="channels-heading-container" >
          <span>CHANNELS</span>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
      <div className="channels-container">
        <div className="channels-heading-container" onClick={() => props.showDirectMessageModal()}>
          <span>DIRECT MESSAGES</span>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  state: state.LeftNavBarComponent
})

export default connect(mapStateToProps, actions)(LeftNavBarComponent);