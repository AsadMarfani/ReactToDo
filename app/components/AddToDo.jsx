var React = require('react');

var AddToDo = React.createClass({
    _onFormSubmit: function (e) {
        e.preventDefault();
        var todoItem = this.refs.todoItem.value;
        if(todoItem.length > 0) {
            this.refs.todoItem.value = '';
            this.props.onAddToDo(todoItem);
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

module.exports = AddToDo;