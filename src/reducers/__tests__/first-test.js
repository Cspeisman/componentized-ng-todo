import assert from 'power-assert';
import {tasks} from '../todoReducer';

describe('Tasks reducer', ()=> {
  describe('When no action is passed', () =>{
    it('should return and empty array', () => {
      assert(tasks([], {}).length === 0);
    });
  });
});
