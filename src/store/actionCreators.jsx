import { TASKS_ACTIONS } from './constants';
import { getCurrentWeather } from "../api/apiWether";
import { WeatherActions } from "./constants";

export const deleteTask = (id) => ({ type: TASKS_ACTIONS.DELETE_TASK, payload: id })
export const toggleTask = (id) => ({ type: TASKS_ACTIONS.TOGGLE_TASK, payload: id })
export const addTask = (body) => ({ type: TASKS_ACTIONS.ADD_TASK, payload: body })
export const changeFilter = (event) => ({ type: TASKS_ACTIONS.CHANGE_FILTER, payload: event })
export const userAuth = () => ({ type: TASKS_ACTIONS.USER_AUTH })

export const fetchStart = () => ({
  type: WeatherActions.fetchStart,
});

export const fetchError = () => ({
  type: WeatherActions.fetchError,
});

export const fetchSuccess = (weather) => ({
  payload: weather,
  type: WeatherActions.fetchSuccess,
});

export const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const weather = await getCurrentWeather(city);
      dispatch(fetchSuccess(weather));
    } catch {
      dispatch(fetchError());
    }
  };
};

