import * as todoActions from '../actions/todoActions';
import todoInput from './todoInput.directive';

export default function() {
  return {
    template: `<div>
                 <h1>{{todoApp.title}}</h1>
                 <todo-input></todo-input>
                 <todo-tasks tasks="todoApp.tasks"></todo-tasks>
              </div>`,
    controller: TodoAppController,
    controllerAs: 'todoApp',
  }
}

class TodoAppController {
  constructor($ngRedux) {
    this.title = 'Corey\'s Todo Application';
    let unsubscribe = $ngRedux.connect(this.mapStateToThis)(this);
  }

  mapStateToThis(state) {
    return {
      tasks: state.tasks
    };
  }
}
