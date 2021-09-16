import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux"
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { compose } from "@reduxjs/toolkit";




export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);




