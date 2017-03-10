var React = require('react');

var SearchToDo = React.createClass({
    handleSearch: function () {
        var showcompletedTodos = this.refs.showCompletedTodos.checked;
        var searchText = this.refs.searchToDo.value;

        this.props.onSearch(searchText,showcompletedTodos);
    },
render: function () {
        return(
            <div>
                <div>
                    <input type="search" placeholder="Search Your ToDo" ref = "searchToDo" onChange = {this.handleSearch}/>
                </div>
                <div>
                    <input type="checkbox" id="showComtodos" ref = "showCompletedTodos" onChange={this.handleSearch}/>
                    <label htmlFor="showComtodos">Show Completed ToDos</label>
                </div>
            </div>
        );
     }
});

module.exports = SearchToDo;