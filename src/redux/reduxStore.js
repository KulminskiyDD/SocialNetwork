import { combineReducers, legacy_createStore as createStore } from "redux";
//import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});
const store = createStore(rootReducer);

export default store;
