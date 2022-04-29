// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { rootReducer } from './reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(rootReducer,
//     composeEnhancers(applyMiddleware(thunk)),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     );


import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


