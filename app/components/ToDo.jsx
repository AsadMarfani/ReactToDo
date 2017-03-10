var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var SearchToDo = require('SearchToDo');
var uuid = require('node-uuid');
var ToDo = React.createClass({
    getInitialState: function () {
      return {
          searchTodos: '',
          completedToDos: false,
          todos: [
              {
                  id: uuid(),
                  text: 'Complete ToDo List Project'
              },
              {
                  id: uuid(),
                  text: 'Watch Harry Porter and the Prisoner of Azkaban'
              },
              {
                  id: uuid(),
                  text: 'Best of Luck Wish to Her'
              },
              {
                  id: uuid(),
                  text: 'Namaz-e-Isha'
              }
          ]
      }
    },
    _handleAddToDo: function (newItem) {
      console.log(...this.state.todos);
        this.setState({
           todos: [
               ...this.state.todos,
               {
                   id: uuid(),
                   text: newItem
               }
           ]
        });
    },
    _handleSearch: function (searchText, showCompletedTodos) {
        this.setState({
            searchTodos: searchText.toLowerCase(),
            completedToDos: showCompletedTodos
        });
    },
    render: function(){
        var {todos} = this.state;
        return(
            <div>
                <SearchToDo onSearch = {this._handleSearch} />
                <ToDoList todos = {todos}  />
                <AddToDo onAddToDo = {this._handleAddToDo}/>
            </div>
        );
    }
});
module.exports = ToDo;