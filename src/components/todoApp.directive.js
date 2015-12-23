import todoInput from './todoInput.directive';

export default function() {
  return {
    template: `<div>
                <h1>{{todoApp.title}}</h1>
                <todo-input tasks="todoApp.tasks"></todo-input>
                <todo-tasks tasks="todoApp.tasks"></todo-tasks>
              </div>`,
    controller: TodoAppController,
    controllerAs: 'todoApp',
  }
}

class TodoAppController {
  constructor() {
    this.title = 'Corey\'s Todo Application';
    this.tasks = [];
  }
}
