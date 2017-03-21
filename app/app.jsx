var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDo = require('ToDo');
var ToDoAPI = require('ToDoAPI');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
    var state = store.getState();
    console.log('New State Is : ',state);
    ToDoAPI.setTodos(state.todos);
});

var initialize = ToDoAPI.getTodos();

store.dispatch(actions.loadToDosFromLocalStorage(initialize));

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//Load Custom CSS
require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
    <Provider store = {store}>
        <ToDo/>
    </Provider>,
    document.getElementById('app')
);
