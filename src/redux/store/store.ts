//import { composeWithDevTools } from 'redux-devtools/extension';
import { applyMiddleware } from "redux"
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { compose, configureStore } from "@reduxjs/toolkit";


// TODO : enable redux dev tool

export const store = configureStore({
  reducer: rootReducer,
  /* composeWithDevTools(
    applyMiddleware(thunk)
  ) */
});




