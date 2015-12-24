import * as Actions from './actionConstants';

export function addTask(todo) {
  return {
    ...todo,
    type: Actions.ADD_TASK,
  }
}

export function completeTask(index) {
  return {
    type: Actions.COMPLETE_TASK,
    taskIndex: index,
  }
}
