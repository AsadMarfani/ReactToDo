var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var SearchToDo = require('SearchToDo');
var ToDo = React.createClass({
    getInitialState: function () {
      return {
          searchTodos: '',
          completedToDos: false,
          todos: [
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
          ]
      }
    },
    _handleAddToDo: function (newItem) {
      alert('new to do item : ' + newItem);
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