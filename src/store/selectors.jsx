import { LOAD_STATUSES } from "../Commponents/weather/constants";

const filterTodo = (filter, todo) => {
  if (filter === "all") {
    return true;
  }

  if (filter === "compleated") {
    return todo.isDone;
  }

  if (filter === "active") {
    return !todo.isDone;
  }
};

export const getFilter = (state) => {
  return state.reducerFilter.selectedFilter;
};

export const getAuth = (state) => {
  return state.reducerAuth.userAuth;
};

export const getTasks = (state) => {
  const filter = state.reducerFilter.selectedFilter;
  return state.reducerTasks.tasks.filter((tasks) => filterTodo(filter, tasks));
};

export const getWeather = (state) => state.WeatherReducer.data;

export const getLoadStatus = (state) => state.WeatherReducer.loadStatus;

export const isLoading = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADING;

export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;

export const isLoaded = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADED;
