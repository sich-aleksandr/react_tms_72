import { TASKS_ACTIONS, WeatherActions } from "./constants";
import { combineReducers } from "redux";
import { LOAD_STATUSES } from "../Commponents/weather/constants";
import { reducer as reducerTasks} from "./todoSlice/slice.js"
import { reducer as WeatherReducer} from "./weatherSlice"

// const INITIAL_STATE_WEATHER = {
//   data: {},
//   loadStatus: LOAD_STATUSES.LOADING
// };


// export const WeatherReducer = (state = INITIAL_STATE_WEATHER, action) => {
//   switch (action.type) {

//     case WeatherActions.fetchStart: {
//         return {
//           data: state.data,
//           loadStatus: LOAD_STATUSES.LOADING,
//         }
//       }
//       case WeatherActions.fetchError: {
//         return {
//           data: {},
//           loadStatus: LOAD_STATUSES.ERROR,
//         }
//       }
//       case WeatherActions.fetchSuccess: {
//         return {
//           data: action.payload,
//           loadStatus: LOAD_STATUSES.LOADED
//         };
//       }

//     default:
//       return state;
//   }
// };

const FILTER_STATUSES = {
  ALL: "all",
  COMPLEATED: "compleated",
  ACTIVE: "active",
};

const INITIAL_STATE_FILTER = {
  selectedFilter: FILTER_STATUSES.ALL,
};

const INITIAL_STATE_USER_AUTH = {
  userAuth: true,
};

export const reducerAuth = ( state = INITIAL_STATE_USER_AUTH, action ) => {
  switch (action.type) {
    case TASKS_ACTIONS.USER_AUTH: {
      return { userAuth: !state.userAuth }

    }
    default:
      return state;
  }
}

export const reducerFilter = (state = INITIAL_STATE_FILTER, action) => {
  switch (action.type) {
    case TASKS_ACTIONS.CHANGE_FILTER: {
      return { selectedFilter: action.payload };
    }

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
    reducerTasks,
    reducerFilter,
    reducerAuth,
    WeatherReducer,
});
