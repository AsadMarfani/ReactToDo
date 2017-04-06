import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import firebase from 'app/firebase/';

import ToDo from 'ToDo';
import Login from 'Login';



var requireLogin = (nextState, replace, next)=>{
    if(!firebase.auth().currentUser) {
        replace('/');
    }
    next();
}

var loggedIn = (nextState, replace, next)=>{
    if(firebase.auth().currentUser){
        replace('/todos');
    }
    next();
 }


export default (<Router history = {hashHistory}>
                <Route path = '/'>
                    <IndexRoute component = {Login} onEnter = {loggedIn}></IndexRoute>
                    <Route path = "todos" component = {ToDo} onEnter = {requireLogin}></Route>
                </Route>
            </Router>);