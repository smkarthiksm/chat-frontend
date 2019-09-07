import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './LoaderComponent.scss'
const LoaderComponent = (props) => {
  return (
    <Fragment>
      {props.state.isLoaderVisible ?
        <div className="full-screen-loader-container">
          <div className="container">
            <div className="row">
              <div className="col-md-12 content-container">
                <div className="p-3">
                  <h3>Searching for your chats and loading them</h3>
                </div>
                <div className="spinner-border spinner-container" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </Fragment>
  );
}

const mapStateToProps = state => ({
  state: state.loaderState
});

export default connect(mapStateToProps)(LoaderComponent);