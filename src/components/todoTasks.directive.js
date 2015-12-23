import '../style.css';

export default function() {
  return {
    scope: {
      tasks: '=',
    },
    controller: TaskListController,
    controllerAs: 'listCtl',
    template: `<ul ng-repeat="task in tasks track by $index">
                 <li ng-class="listCtl.assignClass(task.complete)"><input type="checkbox"
                    ng-checked="task.complete"
                    ng-model="task.complete" />
                    {{task.todo}}
                 </li>
               </ul>`,
  }
}

class TaskListController {
  assignClass(taskCompletion) {
    return taskCompletion ? 'complete' : 'incomplete';
  }
}
