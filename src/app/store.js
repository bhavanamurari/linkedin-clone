// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { userReducer } from 'react'
// import { applyMiddleware } from "redux";
// import logger from "redux-logger";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
// const store = (configureStore(
//   userReducer, composeWithDevTools(applyMiddleware(logger))
// ))

//export default store;
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
