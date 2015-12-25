import '../style.css';
import {toggleTask} from '../actions/todoActions';

export default function() {
  return {
    scope: {
      tasks: '=',
    },
    controller: TaskListController,
    controllerAs: 'listCtl',
    template: `<ul ng-repeat="task in tasks track by $index">
                 <li ng-class="task.complete ? 'complete' : 'incomplete'">
                   <input type="checkbox"
                     ng-checked="task.complete"
                     ng-model="ughAngularIsStupid"
                     ng-change="listCtl.toggle($index)"
                    />
                    {{task.todo}}
                 </li>
               </ul>`,
  };
}

class TaskListController {
  constructor($ngRedux) {
    $ngRedux.connect(null, {toggleTask: toggleTask})(this);
  }

  toggle(index) {
    this.toggleTask(index);
  }
}
