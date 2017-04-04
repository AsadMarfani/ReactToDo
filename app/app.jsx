var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var ToDoAPI = require('ToDoAPI');

import Login from 'Login';
import ToDo from 'ToDo';

var actions = require('actions');
var store = require('configureStore').configure();

store.dispatch(actions.loadToDos());

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//Load Custom CSS
require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
    <Provider store = {store}>
        
            <Router history = {hashHistory}>
                <Route path = '/'>
                    <IndexRoute component = {Login}></IndexRoute>
                    <Route path = "todos" component = {ToDo}>
                    </Route>
                </Route>
                
            </Router>
    </Provider>,
    document.getElementById('app')
);
