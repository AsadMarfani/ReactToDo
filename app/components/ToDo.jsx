var React = require('react');
import * as Redux from 'react-redux';

var ToDoList = require('ToDoList');
import AddToDo from 'AddToDo';
import SearchToDo from 'SearchToDo';
import * as actions from 'actions';

export var ToDo = React.createClass({
    onLogOut(e) {
            e.preventDefault();
            var {dispatch} = this.props;
            dispatch(actions.startLogout());  
        },
    render(){
        return(
            <div>
                <div className="page-actions">
                    <a href="#" onClick = {this.onLogOut}>Logout</a>
                </div>
                <h1 className = "page-title">ToDo App!</h1>
                <div className = "row">
                    <div className = "column small-centered small-11 medium-6 large-5">
                        <div className = "container">
                            <SearchToDo/>
                            <ToDoList/>
                            <AddToDo/>
                        </div>        
                    </div>
                </div>
            </div>
        );
    }
});
export default Redux.connect()(ToDo);