var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDo = require('ToDo');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
    console.log('New State Is : ',store.getState());
});

store.dispatch(actions.addTodo('Clean The Room'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.showCompletedTodos());

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
