import '../style.css';

export default function() {
  return {
    scope: {
      tasks: '=',
    },
    controller: function(){
      this.assignClass = taskCompletion => {
        return taskCompletion ? 'complete' : 'incomplete';
      }
    },
    controllerAs: 'taskCtl',
    template: `<ul ng-repeat="task in tasks track by $index">
                 <li ng-class="taskCtl.assignClass(task.complete)"><input type="checkbox"
                    ng-checked="task.complete"
                    ng-model="task.complete" />
                    {{task.todo}}
                 </li>
               </ul>`,
  }
}
