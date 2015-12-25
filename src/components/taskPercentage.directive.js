export default function() {
  return {
    scope: {
      tasks: '=',
    },
    controller: TaskPercentageController,
    controllerAs: 'percentageCtl',
    template: `<div>
                <div>tasks complete: {{ percentageCtl.completedTasks() }}</div>
                <div> percentage complete: {{percentageCtl.getPercentage()}}</div>
              </div>`,
  };
}

class TaskPercentageController {
  constructor($ngRedux) {
    $ngRedux.subscribe(() => {
      this.state = $ngRedux.getState();
    });
  }

  completedTasks() {
    if (this.state) return this.state.tasks.filter(task => task.complete).length;
    return 0;
  }

  getPercentage() {
    if (this.state) {
      const percentage = Math.round((this.completedTasks() / this.state.tasks.length) * 100);
      return `${percentage} %`;
    }
    return '0 %';
  }
}
