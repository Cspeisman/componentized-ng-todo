import {ADD_TASK, COMPLETE_TASK} from '../actions/todoActions';
import * as Actions from '../actions/actionConstants';

export function tasks(state = [], action) {
  if (action.type === Actions.ADD_TASK) return [...state, {todo: action.todo, complete: false}];
  if (action.type === Actions.COMPLETE_TASK) return state.map((item, index) => {
      if (index === action.taskIndex) return {...item, complete: true};
      return item;
    });

  return state;
}
