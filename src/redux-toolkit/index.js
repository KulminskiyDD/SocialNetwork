import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./profileSlice";
import dialogsReducer from "./dialogsSlice";

export default configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
  },
});
