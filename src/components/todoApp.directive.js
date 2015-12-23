import todoInput from './todoInput.directive';

export default function() {
  return {
    template: `<div>
                <h1>{{todoApp.title}}</h1>
                <todo-input tasks="todoApp.tasks"></todo-input>
                <todo-tasks tasks="todoApp.tasks"></todo-tasks>
              </div>`,
    controller: todoAppController,
    controllerAs: 'todoApp',
  }
}

class todoAppController {
  constructor() {
    this.title = 'Corey\'s Todo Application';
    this.tasks = [];
  }
}
