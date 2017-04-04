var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestutils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import { ToDo } from 'ToDo';

describe('ToDo',()=>{
   it('should exist',()=>{
       expect(ToDo).toExist();
   });
    it('should add new toDo item typed by the user',()=>{
        var todoItem = 'test ToDo Item';
        var todo = ReactTestutils.renderIntoDocument(<ToDo/>);

        todo.setState({todos: []});
        todo._handleAddToDo(todoItem);

        expect(todo.state.todos[0].text).toBe(todoItem);
    });

    it('should change the completed state of the specific id',()=>{
        var todoItem = {
            id: 11,
            text: 'Test Item',
            completed: false
        };
        var todoApp = ReactTestutils.renderIntoDocument(<ToDo/>);
        todoApp.state.todos = [todoItem];

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp._handleCompletedTodos(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});