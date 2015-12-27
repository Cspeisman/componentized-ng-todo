import assert from 'power-assert';
import Immutable from 'Immutable';
import {tasks} from '../todoReducer';
import * as Actions from '../../actions/actionConstants'

describe('Tasks reducer', ()=> {
  describe('When no action is passed', () =>{
    it('should return and empty array', () => {
      assert(tasks().length === 0);
    });
  });

  describe('when an ADD_TASK action is passed in with a todo task', () => {

    it('should default the task\'s complete value to false', () =>{
      assert(tasks([], {type: Actions.ADD_TASK, todo:'task 1'})[0].complete === false);
    });

    it('should return a new array with the previous todo tasks and the new task', () => {
      const existingTasks = [{todo: 'task 1', complete: true}, {todo: 'task 2', complete: false}];

      const results = tasks(existingTasks, {type: Actions.ADD_TASK, todo: 'task 3'});
      const expected = [...existingTasks, {todo: 'task 3', complete: false}];

      assert(results.length === 3);
      assert(results.length !== 2);
      assert(results[results.length - 1].todo === 'task 3');
      assert(results[results.length - 1].todo === expected[expected.length - 1].todo);
      assert(results[results.length - 1].complete === expected[expected.length - 1].complete);
    });
  });

});
