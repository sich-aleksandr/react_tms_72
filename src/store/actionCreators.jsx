import { TASKS_ACTIONS } from './constants';
// import { getCurrentWeather } from "../api/apiWether";
// import { WeatherActions } from "./constants";

export const changeFilter = (event) => ({ type: TASKS_ACTIONS.CHANGE_FILTER, payload: event })
export const userAuth = () => ({ type: TASKS_ACTIONS.USER_AUTH })

// export const fetchStart = () => ({
//   type: WeatherActions.fetchStart,
// });

// export const fetchError = () => ({
//   type: WeatherActions.fetchError,
// });

// export const fetchSuccess = (weather) => ({
//   payload: weather,
//   type: WeatherActions.fetchSuccess,
// });

// export const fetchWeather = (city) => {
//   return async (dispatch) => {
//     try {
//       dispatch(fetchStart());
//       const weather = await getCurrentWeather(city);
//       dispatch(fetchSuccess(weather));
//     } catch {
//       dispatch(fetchError());
//     }
//   };
// };

