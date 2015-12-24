import {ADD_TASK, COMPLETE_TASK} from '../actions/todoActions';

export function tasks(state = [], {type, todo}) {
  if (type !== ADD_TASK) return state;
  return [...state, {todo: todo, complete: false}];
}
