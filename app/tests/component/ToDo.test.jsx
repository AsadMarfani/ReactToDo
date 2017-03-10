var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestutils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var ToDo = require('ToDo');

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
});