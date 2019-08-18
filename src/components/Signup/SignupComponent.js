import React from 'react';
import './SignupComponent.scss'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/SignupAction';

const SignupComponent = (props) => {
  return (
    <div className="row signup-container">
      <div className="col-md-6 signup-container-box">
        <div className="row">
          <div className="col-md-3 left-container">
            <div className="direct-message-container">
              <div className="icon-container">
                <i className="fas fa-comment"></i>
              </div>
              <div>
                <span>Send Direct Messages</span>
              </div>
            </div>
            <div className="direct-message-container">
              <div className="icon-container">
                <i className="fas fa-users"></i>
              </div>
              <div>
                <span>Create Groups and Chat</span>
              </div>
            </div>
            <div className="direct-message-container">
              <div className="icon-container">
                <i className="fas fa-video"></i>
              </div>
              <div>
                <span>Video Call & more</span>
              </div>
            </div>
          </div>
          <div className="col-md-9 right-container">
            <div className="row">
              <div className="col-md-12 user-input-container">
                <input className="col-md-5 user-input-box" type="text" placeholder="First Name" />
                <input className="col-md-5 user-input-box" type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 user-input-container">
                <input className="col-md-5 user-input-box" type="email" placeholder="Email" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 user-input-container">
                <input className="col-md-5 user-input-box" type="number" placeholder="Phone Number" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 user-input-container">
                <input className="col-md-5 user-input-box" type="password" placeholder="Password" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 user-input-container">
                <input className="col-md-5 user-input-box" type="password" placeholder="Retype Password" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 button-container">
                <button type="button" className="btn btn-primary btn-block" onClick={() => props.toggleSignupStatus(props.state.isSignupVisible)}>
                  {props.state.isSignupVisible ?
                    "CREATE ACCOUNT"
                    :
                    <div className="spinner-border spinner-border-sm" role="status" />
                  }
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 sign-in-container">
                <Link to="/">
                  <span>Already have an account? SIGN IN</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
const mapStateToProps = state => ({
  state: state.signupState
})

export default connect(mapStateToProps, actions)(SignupComponent);