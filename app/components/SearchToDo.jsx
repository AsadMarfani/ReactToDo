var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var SearchToDo = React.createClass({
    
    render: function () {
            var {dispatch, showCompleted, searchText} = this.props;
            return(
                <div className="container__header">
                    <div>
                        <input type="search" placeholder="Search Your ToDo" value = {searchText}  ref = "searchToDo" onChange = {()=>{
                            let searchText = this.refs.searchToDo.value;
                            dispatch(actions.setSearchText(searchText))
                        }}/>
                    </div>
                    <div>
                        <input type="checkbox" id="showComtodos" ref = "showCompletedTodos" checked = {showCompleted} onChange={()=>{
                            dispatch(actions.showCompletedTodos())
                        }}/>
                        <label htmlFor="showComtodos">Show Completed ToDos</label>
                    </div>
                </div>
            );
        }
    });

export default connect((state)=>{
    return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
    };
})(SearchToDo);