var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers',()=>{
    describe('searchTextReducer',()=>{ 
        it('should set search text',()=>{
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Some search text'
            };
            var response = reducers.searchTextReducer(df(''),df(action));

            expect(response).toEqual(action.searchText);
        });
    });
    describe('showCompletedReducer',()=>{
        it('should revert the state of completed todos',()=>{
            var action = {
                 type: 'TOGGLE_SHOW_COMPLETED'
            };
          var response = reducers.showCompletedReducer(df(false), df(action));

          expect(response).toEqual(true);   
        });
    });
});