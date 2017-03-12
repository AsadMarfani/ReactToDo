var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var SearchToDo = require('SearchToDo');
var ToDoAPI = require('ToDoAPI');

var ToDo = React.createClass({
    getInitialState: function () {
      return {
          searchTodos: '',
          completedToDos: false,
          todos: ToDoAPI.getTodos()
      }
    },
    componentDidUpdate: function () {
        ToDoAPI.setTodos(this.state.todos);
    },
    _handleAddToDo: function (newItem) {
      console.log(...this.state.todos);
        this.setState({
           todos: [
               ...this.state.todos,
               {
                   id: uuid(),
                   text: newItem,
                   completed: false,
                   createdAt: moment().format('MMM Do, YYYY @ hh:mm:ss A'),
                   completedAt: undefined
               }
           ]
        });
    },
    _handleCompletedTodos: function (id) {
        var updatedTodos = this.state.todos.map(function (todo) {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                    todo.completedAt = todo.completed ? moment().format('MMM Do, YYYY @ hh:mm:ss A') : undefined;
                }

            return todo;
        });

        this.setState({
           todos: updatedTodos
        });
    },
    _handleSearch: function (searchText, showCompletedTodos) {
        this.setState({
            searchTodos: searchText.toLowerCase(),
            completedToDos: showCompletedTodos
        });
    },
    render: function(){
        var {todos,completedToDos,searchTodos} = this.state;
        var filteredToDos = ToDoAPI.filteredToDOs(todos,completedToDos,searchTodos);
        return(
            <div>
                <SearchToDo onSearch = {this._handleSearch} />
                <ToDoList todos = {filteredToDos} onToggle = {this._handleCompletedTodos}  />
                <AddToDo onAddToDo = {this._handleAddToDo}/>
            </div>
        );
    }
});
module.exports = ToDo;