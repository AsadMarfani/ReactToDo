var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestutils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var ToDoList = require('ToDoList');
var ToDos = require('ToDos');
describe('ToDoList',()=>{
    it('should exist',()=>{
        expect(ToDoList).toExist();
    });
    it('should render one ToDo Component for each todo item',()=>{
        var todos = [
            {
                id: 1,
                text: 'Complete ToDo List Project'
            },
            {
                id: 2,
                text: 'Watch Harry Porter and the Prisoner of Azkaban'
            },
            {
                id: 3,
                text: 'Best of Luck Wish to Her'
            },
            {
                id: 4,
                text: 'Namaz-e-Isha'
            }
        ];
       var todoList = ReactTestutils.renderIntoDocument(<ToDoList todos = {todos}/>);
        var todosComponent = ReactTestutils.scryRenderedComponentsWithType(todoList, ToDos);

        expect(todosComponent.length).toBe(todos.length);
    });
});