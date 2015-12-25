import * as todoActions from '../actions/todoActions';

export default function() {
  return {
    template: `<div>
                 <h1>{{todoApp.title}}</h1>
                 <task-percentage></task-percentage>
                 <todo-input></todo-input>
                 <todo-tasks tasks="todoApp.tasks"></todo-tasks>
              </div>`,
    controller: TodoAppController,
    controllerAs: 'todoApp',
  };
}

class TodoAppController {
  constructor($ngRedux) {
    this.title = 'Corey\'s Todo Application';
    $ngRedux.connect(this.mapStateToThis, todoActions)(this);
  }

  mapStateToThis(state) {
    return {
      tasks: state.tasks,
    };
  }
}
