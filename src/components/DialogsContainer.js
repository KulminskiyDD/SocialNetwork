import React from "react";
import Dialogs from "./Dialogs";
import { useDispatch } from "react-redux";
import {
  sendMessage,
  updateNewMessageBody,
} from "../redux-toolkit/dialogsSlice";
import { useSelector } from "react-redux";

const DialogsContainer = () => {
  const dispatch = useDispatch();

  const onSendMessageClick = () => {
    dispatch(sendMessage());
  };

  const onMessageBodyChange = (newMessage) => {
    dispatch(updateNewMessageBody({ newMessage }));
  };

  const dialogsPage = useSelector((state) => state.dialogsPage);

  return (
    <Dialogs
      updateNewMessageBodyTask={onMessageBodyChange}
      sendMessageTask={onSendMessageClick}
      dialogsPage={dialogsPage}
    />
  );
};

export default DialogsContainer;
