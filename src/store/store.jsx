
import { applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  composeEnhancers: composeEnhancers(applyMiddleware(thunk)),
})




