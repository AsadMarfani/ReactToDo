var expect = require('expect');
var actions = require('actions');

describe('Actions',()=>{
    it('should dispatch set search text',()=>{
        var action =  {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
    };
        var response = actions.setSearchText(action.searchText);
        expect(response).toEqual(action);
    });

    it('should add todo',() => {
        var action = {
            type: 'ADD_TODO',
            text: 'Something to Add!'
        };
        var response = actions.addTodo(action.text);
        expect(response).toEqual(action);

    });

    it('should show completed todos',()=>{
        var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
        };
        var response = actions.showCompletedTodos();
        expect(response).toEqual(action);

    });

    it('should toggle individual todo',()=>{
        var action = {
        type: 'TOGGLE_TODO',
        id: 1
        };
        var response = actions.toggleTodo(action.id);
        expect(response).toEqual(action);
    });
});