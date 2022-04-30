export { store } from './store';
export * as TasksSelectors from './selectors';
export * as TasksActionCreators from './actionCreators';
export * as WeatherSelectors from "./selectors";
// export * as WeatherAC from "./actionCreators";
export { actions as WeatherAC } from "./weatherSlice/index.js";
export { actions as TasksAction } from "./todoSlice/slice.js"
