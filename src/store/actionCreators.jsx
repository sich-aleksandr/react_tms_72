import { TASKS_ACTIONS } from './constants';

export const deleteTask = (id) => ({ type: TASKS_ACTIONS.DELETE_TASK, payload: id })
export const toggleTask = (id) => ({ type: TASKS_ACTIONS.TOGGLE_TASK, payload: id })
export const addTask = (body) => ({ type: TASKS_ACTIONS.ADD_TASK, payload: body })
export const changeFilter = (event) => ({ type: TASKS_ACTIONS.CHANGE_FILTER, payload: event })
