import React, { Fragment, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/ChatAction';
import './ChatComponent.scss';

const ChatComponent = (props) => {
  const lastMessageRef = React.createRef();

  const scrollToBottom = () => {
    lastMessageRef.current.scrollIntoView()
  }
  useEffect(() => {
    props.getChatMessages(props.match.params.chatId);
  }, [props.match.params.chatId]);

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      props.sendNewMessage(props.match.params.chatId, e.target.value);
      // setTimeout(() => {
        scrollToBottom();
      // }, 10);
    }
  }

  return (
    <div className="col-md-10 chat-container">
      {props.state.isLoaderVisible ?
        <div className="loader">
          <div className="spinner-border text-danger" role="status" />
        </div>
        :
        props.state.chatMessagesData.chatMembers ?
          <Fragment>
            <div className="chat-header">
              <span>
                {props.state.chatMessagesData.chatMembers.map((element, index) => {
                  return element.firstName + " " + element.lastName + (index === props.state.chatMessagesData.chatMembers.length - 1 ? '' : ', ')
                }
                )}
              </span>
              {props.state.chatMessagesData.chatMembers.length > 1 ?
                <div className="member-count">
                  <i className="fas fa-users"></i>
                  {props.state.chatMessagesData.chatMembers.length}
                </div>
                : null}
            </div>
            <div className="chat-body">
              {props.state.chatMessagesData.messages.length > 0 ?
                <Fragment>
                  <div className="new-message-banner">
                    <h5>
                      -- This is the beginning of your chat history --
                    </h5>
                  </div>
                  {props.state.chatMessagesData.messages.map((element, index) =>
                    <div className="message-container" key={element.id}>
                      {index === 0 || props.state.chatMessagesData.messages[index - 1].userId !== element.userId ?
                        <div className="message-sender">
                          <div className="image-container">
                            {element.firstName ? element.firstName[0] : ''}{element.lastName ? element.lastName[0] : ''}
                          </div>
                          {element.firstName + " " + element.lastName}
                        </div>
                        :
                        null
                      }
                      <div className={`message-content ${!element.isSent ? 'not-sent-color' : null}`}>
                        {element.message}
                      </div>
                    </div>
                  )}
                  < div ref={lastMessageRef} />
                </Fragment>
                :
                <div className="no-message-container">
                  <h3>
                    Great friendship starts with a Hi &nbsp;
                  <i className="fas fa-smile-wink"></i>
                  </h3>
                </div>
              }
              <div className="new-message-container">
                <textarea rows="3" placeholder="Type to send a message" type="text" value={props.state.newMessage} onChange={(event) => props.updateField(event.target.value)} onKeyDown={onEnterPress} />
              </div>
            </div>
          </Fragment>
          : null
      }
    </div>
  );
}

const mapStateToProps = state => ({
  state: state.chatState
})

export default connect(mapStateToProps, actions)(ChatComponent);