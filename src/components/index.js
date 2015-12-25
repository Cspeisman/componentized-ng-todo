import angular from 'angular';
import todoApp from './todoApp.directive';
import todoInput from './todoInput.directive';
import todoTasks from './todoTasks.directive';
import taskPercentage from './taskPercentage.directive';

export default angular.module('app.directives', [])
                    .directive('todoApp', todoApp)
                    .directive('todoInput', todoInput)
                    .directive('todoTasks', todoTasks)
                    .directive('taskPercentage', taskPercentage);
