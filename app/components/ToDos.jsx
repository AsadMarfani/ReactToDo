var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var ToDos = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var className = completed ? 'todo todo-completed' : 'todo';
        var returnDataAndMsg = ()=>{

            let msg = 'Created At : ';
            let createCompleteDate = createdAt;

            if(completedAt) {
                msg = 'Completed At : ';
                createCompleteDate = completedAt;
            }
          return msg + createCompleteDate;
        };
        return(
            <div className= {className} onClick = {()=>{
                dispatch(actions.startToggleTodo(id, !completed));
            }}>
                <div>
                    <input type="checkbox" checked = {completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__sub-text">{returnDataAndMsg()}</p>
                </div>
            </div>
        );
    }
});

module.exports = connect()(ToDos);