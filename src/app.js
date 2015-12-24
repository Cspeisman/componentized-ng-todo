import angular from 'angular';
import Components from './components';
import reducer from './reducers';
import ngRedux from 'ng-redux';

angular.module('app', [ngRedux, Components.name])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(reducer, []);
  });
