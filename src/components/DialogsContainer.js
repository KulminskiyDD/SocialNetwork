import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../StoreContext";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../redux/dialogsReducer";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const onMessageBodyChange = (body) => {
          store.dispatch(updateNewMessageBodyActionCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBody={onMessageBodyChange}
            sendMessage={onSendMessageClick}
            dialogsPage={store.getState().dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
