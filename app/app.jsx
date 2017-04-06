var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

import firebase from 'app/firebase/';
import router from 'app/router/router';

firebase.auth().onAuthStateChanged((user)=>{
    if(user) {
        hashHistory.push('/todos');
    }
    else {
        hashHistory.push('/');
    }
});

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
        {router}
    </Provider>,
    document.getElementById('app')
);
