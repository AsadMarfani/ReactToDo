var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDo = React.createClass({
    getInitialState: function () {
      return {
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
    render: function(){
        var {todos} = this.state;
        return(
            <div>
                <ToDoList todos = {todos}  />
                <AddToDo onAddToDo = {this._handleAddToDo}/>
            </div>
        );
    }
});

module.exports = ToDo;