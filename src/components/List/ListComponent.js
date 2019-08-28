import React from 'react';
import './ListComponent.scss'
import { connect } from 'react-redux';
import * as actions from '../../actions/ListAction';

const ListComponent = (props) => {
  return (
    <div className="list-container">
      {props.state.listData.map((element, index) =>
        <div className="list-element-container row" key={element.id} onClick={() => addItem(props, element, index)}>
          <div className="col-md-8">
            <div className="image-container">
              {element.firstName ? element.firstName[0] : ''}{element.lastName ? element.lastName[0] : ''}
            </div>
            {element.firstName} {element.lastName}
          </div>
          <div className="col-md-4">{element.email}</div>
        </div>
      )}
    </div>
  );
}
const addItem = (props, element) => {
  props.state.membersToBeDisplayed.push(element);
  props.state.membersToBeDisplayed = props.state.membersToBeDisplayed.filter((item, index, inputArray) => {
    return inputArray.indexOf(item) === index;
  });
  props.addItem(props.state.membersToBeDisplayed);
}
const mapStateToProps = (state) => ({
  state: state.listState
})

export default connect(mapStateToProps, actions)(ListComponent);