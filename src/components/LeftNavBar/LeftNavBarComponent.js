import React, { useEffect } from 'react';
import './LeftNavBarComponent.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/LeftNavBarAction';
const LeftNavBarComponent = (props) => {
  useEffect(() => {
    props.getRequiredData();
  }, [])

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
        <div className="content-container">
          {props.state.directMessages.map((element) =>
            <Link to={`/chatId=${element.chatId}`} key={element.chatId}>
              <div className={`content ${element.chatId === props.state.selectedChatId ? 'content-selected' : null}`} onClick={() => props.highlightSelectedChat(element.chatId)}>
                <i className="fas fa-circle"></i>
                <span>
                  {element.members.map((member, index) => {

                    return member.firstName + " " + member.lastName + (index === element.members.length - 1 ? '' : ', ')
                  }
                  )}
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  state: state.leftNavBarState
})

export default connect(mapStateToProps, actions)(LeftNavBarComponent);