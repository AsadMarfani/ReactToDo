var React = require('react');
var {connect} = require('react-redux');
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
// const mapStateToProps = (state, ownProps) => {
//     // if you need to map some data from store 
//     return {
//         // some data from state here 
//         todos: state.todos
//     };
// };

module.exports =  connect((state)=>{
    return {
        todos: state.todos
    }
})(ToDoList);