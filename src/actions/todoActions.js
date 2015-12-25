import * as Actions from './actionConstants';

export function addTask(todo) {
  return {
    ...todo,
    type: Actions.ADD_TASK,
  };
}

export function toggleTask(index) {
  return {
    type: Actions.TOGGLE_TASK,
    taskIndex: index,
  };
}
