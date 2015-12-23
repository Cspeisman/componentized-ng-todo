export default function() {
  return {
    scope: {
      tasks: '='
    },
    controller: inputController,
    controllerAs: 'inputCtl',
    template: `<form ng-submit="inputCtl.save()">
                 <input placeholder="buy salami..." type="text" ng-model="inputCtl.task.todo"/>
                 <input type='submit' />
              </form>`
  }
}

class inputController {
  constructor($scope){
    this.tasks = $scope.tasks;
  }

  save() {
    this.tasks.push({...this.task, complete: false});
    this.task = {};
  }
}
