import { TASKS_ACTIONS } from "./constants";
import { combineReducers } from "redux";

const FILTER_STATUSES = {
  ALL: "all",
  COMPLEATED: "compleated",
  ACTIVE: "active",
};

const INITIAL_STATE_USERS = {
  tasks: [
    { id: 1, label: "Выучить JS", isDone: true },
    { id: 2, label: "Выучить React", isDone: true },
    { id: 3, label: "Выучить Redux", isDone: false },
    { id: 4, label: "Выучить ВСЕ", isDone: false },
  ],
  maxId: 5,
};

const INITIAL_STATE_FILTER = {
  selectedFilter: FILTER_STATUSES.ALL,
};



export const reducerTasks = (state = INITIAL_STATE_USERS, action) => {
  switch (action.type) {
    case TASKS_ACTIONS.DELETE_TASK: {
      return {
        tasks: state.tasks.filter(
          ({ id: taskID }) => taskID !== action.payload
        ),
      };
    }

    case TASKS_ACTIONS.ADD_TASK: {
      const newItem = {
        id: state.maxId,
        label: action.payload,
        isDone: false,
      };

      return {
        ...state,
        tasks: [...state.tasks, newItem],
        maxId: state.maxId + 1,
      };
    }

    case TASKS_ACTIONS.TOGGLE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return { ...task, isDone: !task.isDone };
        }),
      };
    }

    default:
      return state;
  }
};
export const reducerFilter = (state = INITIAL_STATE_FILTER, action) => {
  switch (action.type) {
    case TASKS_ACTIONS.CHANGE_FILTER: {
      return { selectedFilter: action.payload.target.value };
    }

    default:
      return state;
  }
};


export const rootReducer = combineReducers({
    reducerTasks,
    reducerFilter,
});
