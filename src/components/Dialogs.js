import React from "react";
import css from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={`${css.dialogs} ${css.active}`}>
      <NavLink to={"/dialogs/" + props.id}>{props.nameD}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div>{props.message}</div>;
};

const Dialogs = (props) => {
  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onMessageBodyChange = (e) => {
    props.updateNewMessageBody(e.target.value);
  };

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {props.dialogsPage.dialogs.map((el) => (
          <DialogItem id={el.id} nameD={el.nameD} />
        ))}
      </div>
      <div className={css.mess}>
        <div>
          {props.dialogsPage.messages.map((el) => (
            <MessageItem message={el.message} />
          ))}
        </div>
        <div>
          <div>
            <textarea
              onChange={onMessageBodyChange}
              value={props.dialogsPage.newMessageBody}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
