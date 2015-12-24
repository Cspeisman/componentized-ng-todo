export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

export function addTask(todo) {
  return {
    ...todo,
    type: ADD_TASK,
  }
}

export function completeTask(index) {
  return {
    type: COMPLETE_TASK,
    index: index,
  }
}
