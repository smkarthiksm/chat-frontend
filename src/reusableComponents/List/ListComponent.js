import React from 'react';
import './ListComponent.scss'

const ListComponent = (props) => {
  return (
    <div className="list-container">
      {props.listProps.listData.map((element) =>
        <div className="list-element-container row" key={element.id} onClick={() => props.listProps.addSelectElement(element)}>
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
export default ListComponent;