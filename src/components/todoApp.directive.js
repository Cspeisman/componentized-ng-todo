import todoInput from './todoInput.directive';

export default function() {
  return {
    template: `<div>
                <h1>{{todoApp.title}}</h1>
                <todo-input value="todoApp.value" submit="todoApp.submit()"></todo-input>
                <todo-tasks tasks="todoApp.tasks" complete-task="todoApp.foo()"></todo-tasks>
              </div>`,
    controller: todoAppController,
    controllerAs: 'todoApp',
  }
}

class todoAppController {
  constructor() {
    this.title = 'Corey\'s Todo Application';
    this.value = '';
    this.tasks = [];
  }

 submit() {
   this.tasks.push({todo: this.value, complete: false})
   console.log(this.tasks)
   this.value = '';
 }
}
