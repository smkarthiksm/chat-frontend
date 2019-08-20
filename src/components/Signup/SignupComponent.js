import React from 'react';
import './SignupComponent.scss'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/SignupAction';
import * as Validations from '../../utilities/Validations';

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
                <input className="col-md-5 user-input-box" name="firstName" type="text" placeholder="First Name" defaultValue={props.state.firstName} onChange={(event) => onChange(props, event)} />
                <input className="col-md-5 user-input-box" name="lastName" type="text" placeholder="Last Name" defaultValue={props.state.lastName} onChange={(event) => onChange(props, event)} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 user-input-container">
                <input className="col-md-5 user-input-box" name="email" type="email" placeholder="Email" defaultValue={props.state.email} onChange={(event) => onChange(props, event)} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 user-input-container">
                <input className="col-md-5 user-input-box" name="phoneNumber" type="number" placeholder="Phone Number" defaultValue={props.state.phoneNumber} onChange={(event) => onChange(props, event)} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 user-input-container">
                <input className="col-md-5 user-input-box" name="password" type="password" placeholder="Password" defaultValue={props.state.password} onChange={(event) => onChange(props, event)} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 user-input-container">
                <input className="col-md-5 user-input-box" name="retypePassword" type="password" placeholder="Retype Password" defaultValue={props.state.retypePassword} onChange={(event) => onChange(props, event)} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 button-container">
                <button type="button" className="btn btn-primary btn-block" onClick={() => onSubmit(props)}>
                  {props.state.isLoaderVisible ?
                    <div className="spinner-border spinner-border-sm" role="status" />
                    :
                    "CREATE ACCOUNT"
                  }
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 sign-in-container">
                <Link to="/" onClick={() => { props.clearInputFields() }}>
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

const onChange = (props, event) => {
  props.updateFields(event.target.name, event.target.value)
}

const onSubmit = (props) => {
  if (validateInput(props)) {
    props.signup(props);
  }
}
const validateInput = (props) => {
  if (Validations.textValidation(props.state.firstName) && Validations.textValidation(props.state.lastName) && Validations.emailValidation(props.state.email)
    && Validations.numberValidation(props.state.phoneNumber) && props.state.password && (props.state.password === props.state.retypePassword)) {
    return true;
  }
  else {
    return false;
  }
}
const mapStateToProps = state => ({
  state: state.signupState
})

export default connect(mapStateToProps, actions)(SignupComponent);