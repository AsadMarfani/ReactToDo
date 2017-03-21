var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddToDo = React.createClass({
    _onFormSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoItem = this.refs.todoItem.value;
        if(todoItem.length > 0) {
            this.refs.todoItem.value = '';
            dispatch(actions.addTodo(todoItem));
        }
        this.refs.todoItem.focus();
    },
    render: function () {

        return(
            <div className="container__footer">
                <form onSubmit={this._onFormSubmit}>
                    <input type="text" ref = "todoItem" placeholder="What to do you need to do?"/>
                    <button type="submit" className = "button expanded">Add ToDo!</button>
                </form>
            </div>
        );
    }
});

export default connect()(AddToDo);