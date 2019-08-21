import React from 'react';
import './LoginComponent.scss'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/LoginAction';
import * as Validations from '../../utilities/Validations';

const LoginComponent = (props) => {
  return (
    <div className="row login-page-container">
      <div className="col-md-6 col-lg-6 col-xl-6 p-0 d-none d-md-block">
        <div className="login-left-container">
          <div className="login-image-container" />
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-6 p-0 h-100">
        <div className="login-form-container">
          <div className="login-image-container d-block d-md-none" />
          <div className="login-form-box">
            <div className="logo-container">
              <div className="logo-image-container">
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="user-input-container">
              <input className="user-input-box" name="email" type="email" placeholder="Email" defaultValue={props.state.email} onChange={(event) => onChange(props, event)} />
            </div>
            <div className="user-input-container pb-0">
              <input className="user-input-box" name="password" type="password" placeholder="Password" defaultValue={props.state.password} onChange={(event) => onChange(props, event)} />
            </div>
            <div className="forgot-password-container">
              <span>Forgot Password ?</span>
            </div>
            <div className="button-container">
              <button type="button" className="btn btn-primary btn-block" onClick={() => onSubmit(props)}>
                {props.state.isLoaderVisible ?
                  <div className="spinner-border spinner-border-sm" role="status" />
                  :
                  "SIGN IN"
                }
              </button>
            </div>
            <div className="sign-up-container">
              <Link to="/signup" onClick={() => { props.clearInputFields() }}>
                <span>Dont' have an account? SIGN UP</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const onChange = (props, event) => {
  props.updateFields(event.target.name, event.target.value)
}

const onSubmit = (props) => {
  if (validateInput(props)) {
    props.login(props);
  }
}
const validateInput = (props) => {
  if (Validations.emailValidation(props.state.email) && props.state.password) {
    return true;
  }
  else {
    return false;
  }
}

const mapStateToProps = state => ({
  state: state.loginState
}
);

export default connect(mapStateToProps, actions)(LoginComponent);