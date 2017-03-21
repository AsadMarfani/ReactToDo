var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var ToDoList = require('ToDoList');
import AddToDo from 'AddToDo';
import SearchToDo from 'SearchToDo';

var ToDo = React.createClass({
    render: function(){
        return(
            <div>
                <h1 className = "page-title">ToDo App!</h1>
                <div className = "row">
                    <div className = "column small-centered small-11 medium-6 large-5">
                        <div className = "container">
                            <SearchToDo/>
                            <ToDoList/>
                            <AddToDo/>
                        </div>        
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = ToDo;