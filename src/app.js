import angular from 'angular';
import todoApp from './components/todoApp.directive';
import todoInput from './components/todoInput.directive';
import todoTasks from './components/todoTasks.directive';

angular.module('app', [])
  .directive('todoApp', todoApp)
  .directive('todoInput', todoInput)
  .directive('todoTasks', todoTasks)
