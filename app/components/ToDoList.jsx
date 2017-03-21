var React = require('react');
var {connect} = require('react-redux');
var ToDos = require('ToDos');
var ToDoAPI = require('ToDoAPI');

var ToDoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        var renderToDos = () => {
            if(todos.length === 0) {
                return(
                    <h3 className="container__message">No ToDos Found :(</h3>
                );
            }
            return ToDoAPI.filteredToDOs(todos,showCompleted,searchText).map((todo)=>{
                return <ToDos key = {todo.id} {...todo}/> ;
            });
        }
        return (
            <div>
                {renderToDos()}
            </div>
        );
    }
});
module.exports =  connect((state)=>{
    return state;
})(ToDoList);