var React = require('react');
var ToDos = require('ToDos');


var ToDoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderToDos = () => {
            return todos.map((todo)=>{
                return <ToDos key = {todo.id} {...todo} onToggle = {this.props.onToggle}/> ;
            });
        }
        return (
            <div>
                {renderToDos()}
            </div>
        );
    }
});

module.exports = ToDoList;