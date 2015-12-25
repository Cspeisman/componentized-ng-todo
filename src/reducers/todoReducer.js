import * as Actions from '../actions/actionConstants';

export function tasks(state = [], action) {
  if (action.type === Actions.ADD_TASK) return [...state, {todo: action.todo, complete: false}];

  if (action.type === Actions.TOGGLE_TASK) {
    return state.map((item, index) => {
      if (index === action.taskIndex) return {...item, complete: !item.complete};
      return item;
    });
  }

  return state;
}
