import React, { Fragment } from 'react';
import './DirectMessageModalComponent.scss';
import { connect } from 'react-redux';
import * as actions from '../../actions/DirectMessageModalAction';
const DirectMessageModalComponent = (props) => {
  return (
    <Fragment>
      {props.state.isModalVisible ?
        <div className="overlay">
          <div className="modal-container">
            <div className="close-container" onClick={() => props.hideModal()}>
              <h3>
                <i className="fas fa-times"></i>
              </h3>
            </div>
            <div className="header">
              <h4>Direct Message</h4>
            </div>
            <div className="search-bar col-md-12">
              <input className="col-md-8 user-input-box" name="search" type="text" placeholder="Search by name..." defaultValue={props.state.searchValue} onChange={(event) => props.updateFields(event.target.value)} />
              <button type="button" className="col-md-2 btn btn-primary btn-block" disabled={props.state.searchResponse.length > 0 ? false : true}>
                {props.state.isButtonLoaderVisible ?
                  <div className="spinner-border spinner-border" role="status" />
                  :
                  "Jump to conversation"
                }
              </button>
            </div>
            <div className="loader-container">
              {props.state.isDataLoaderVisible ?
                <div className="spinner-border text-danger" role="status" />
                :
                null
              }
            </div>
          </div>
        </div> : null}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  state: state.DirectMessageModalState
})

export default connect(mapStateToProps, actions)(DirectMessageModalComponent);