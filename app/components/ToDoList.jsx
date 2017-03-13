var React = require('react');
var ToDos = require('ToDos');


var ToDoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderToDos = () => {
            if(todos.length === 0) {
                return(
                    <h3 className="container__message">No ToDos Found :(</h3>
                );
            }
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