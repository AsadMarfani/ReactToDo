var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var moment = require('moment');

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
    describe('todosReducer',()=>{
        it('should add item to todo List',()=>{
            var action = {
              type: 'ADD_TODO',
              text: 'Add First Item In ToDo List'
            };

            var response = reducers.todosReducer(df([]),df(action));

            expect(response.length).toEqual(1);
            expect(response[0].text).toEqual(action.text);
        });
        it('should toggle todos according to item id',()=>{
            var todo = [{
                   id: 1,
                   text: 'Sleeping',
                   completed: false,
                   createdAt: moment().format('MMM Do, YYYY @ hh:mm:ss A'),
                   completedAt: undefined
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            };

            var response = reducers.todosReducer(df(todo),df(action));

            expect(response[0].completed).toEqual(!todo[0].completed);
        });
    });
});