var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ToDo = require('ToDo');

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//Load Custom CSS
require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
    <ToDo/>,
    document.getElementById('app')
);
