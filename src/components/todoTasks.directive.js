import '../style.css';
import {completeTask} from '../actions/todoActions';

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
                    ng-model="task.complete"
                    ng-change="listCtl.toggle($index)"
                    />
                    {{task.todo}}
                 </li>
               </ul>`,
  }
}

class TaskListController {
  constructor($ngRedux) {
    $ngRedux.connect(null, {completeTask: completeTask})(this)
  }

  assignClass(taskCompletion) {
    return taskCompletion ? 'complete' : 'incomplete';
  }

  toggle(index) {
    this.completeTask(index)
  }
}
