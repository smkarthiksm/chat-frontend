import React, { Fragment } from 'react';
import './ModalComponent.scss';
import { connect } from 'react-redux';
import * as actions from '../../actions/ModalAction';
import ListComponent from '../../reusableComponents/List/ListComponent';
const ModalComponent = (props) => {

  const addSelectElement = (element) => {
    let selectedElements = props.state.membersToBeDisplayed;
    selectedElements.push(element);
    selectedElements = selectedElements.filter((item, index, inputArray) => {
      return inputArray.indexOf(item) === index;
    });
    props.selectedElements(selectedElements);
  }

  const removeSelectedElement = (index) => {
    let selectedElements = props.state.membersToBeDisplayed;
    if (index > -1) {
      selectedElements.splice(index, 1);
    }
    props.selectedElements(selectedElements);
  }

  const updateFields = (searchText) => {
    if (searchText) {
      props.updateFields(searchText);
    }
    else {
      props.clearSearchResult();
    }
  }

  

  return (
    <Fragment>
      {props.state.isModalVisible ?
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="close-container" onClick={() => props.hideModal()}>
              <h3>
                <i className="fas fa-times"></i>
              </h3>
            </div>
            <div className="header">
              <h4>{props.state.modalTitle}</h4>
            </div>
            <div className="search-bar col-md-12">
              <input className="col-md-8 user-input-box" name="search" type="text" placeholder="Search by name..." defaultValue={props.state.searchValue} onChange={(event) => updateFields(event.target.value)} />
              <button type="button" className="col-md-2 btn btn-primary btn-block" disabled={props.state.membersToBeDisplayed ? false : true} onClick={() => props.createNewDirectMessage(props.state.membersToBeDisplayed)}>
                {props.state.isButtonLoaderVisible ?
                  <div className="spinner-border spinner-border-sm" role="status" />
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
            <div className="col-md-8 tag-container">
              {props.state.membersToBeDisplayed && props.state.membersToBeDisplayed.length > 0 ?
                props.state.membersToBeDisplayed.map((element, index) =>

                  <div key={element.id} className="badge badge-pill badge-primary tag" onClick={() => removeSelectedElement(index)}>
                    {element.firstName} {element.lastName}
                    <span className="tag-remove"><i className="fas fa-times"></i></span>
                  </div>
                )
                : null
              }
            </div>
            <div className="col-md-8 p-0">
              {(props.state.searchResponse && !props.state.searchResponse.length && !props.state.membersToBeDisplayed.length) ?
                <div className="no-text-container">
                  No results to display
                </div>
                : props.state.searchResponse ?
                  <ListComponent listProps={{ listData: props.state.searchResponse, addSelectElement: addSelectElement }} /> :
                  null
              }
            </div>
          </div>
        </div> : null}
    </Fragment>
  );
}
const mapStateToProps = state => ({
  state: state.modalState
})

export default connect(mapStateToProps, actions)(ModalComponent);