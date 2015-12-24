import {addTask} from '../actions/todoActions';

export default function() {
  return {
    scope: {
      tasks: '='
    },
    controller: TaskInputController,
    controllerAs: 'inputCtl',
    template: `<form ng-submit="inputCtl.save()">
                 <input placeholder="buy salami..." type="text" ng-model="inputCtl.task.todo"/>
                 <input type='submit' />
              </form>`
  }
}

class TaskInputController {
  constructor($ngRedux, $scope){
    this.tasks = $scope.tasks;
    $ngRedux.connect(null, {addTask: addTask})(this);
  }

  save() {
    this.addTask(this.task);
    this.task = {};
  }
}
